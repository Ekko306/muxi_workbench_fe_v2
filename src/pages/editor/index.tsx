import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { initialStatus } from 'store/features/statusList/statusListSlice'
import './index.less'
import TinymceEditor from 'components/editor'
import Button, { buttonType } from 'components/button'
import Prev from 'components/prev'
import Card from 'components/card'
import message from 'components/message'
import Modal from 'components/modal'
import useDebouncedEffect from 'components/hooks/useDebouncedEffect'

const Editor: React.FC = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [btnDisable, setBtnDisable] = useState(false)
    const [modal, setModal] = useState(false)

    // 存储 & 更新标题与内容
    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const handleContent = (value: string) => {
        setContent(value.toString())
    }

    // 点击发布进度逻辑
    const history = useHistory()
    const dispatch = useDispatch()
    const handleClick = () => {
        setBtnDisable(true)
        if (title === '' || content === '') {
            message.danger('标题和内容不能为空！', 1.5, () => {
                setBtnDisable(false)
            })
        } else {
            API.status.postStatus
                .request(
                    {},
                    {
                        content,
                        title
                    }
                )
                .then(() => {
                    message.success('发布进度成功！', 1.5, () => {
                        setBtnDisable(false)
                        setTitle('')
                        setContent('')
                        localStorage.removeItem('newPost')
                        history.push('/status')
                        dispatch(initialStatus())
                    })
                })
        }
    }

    // 检查是否有草稿
    let draft: string | null = null
    //  第一次进入的时候检查是否草稿
    useEffect(() => {
        draft = localStorage.getItem('newPost')
        localStorage.setItem('id', '115')
        if (draft !== null) {
            setModal(true)
        }
    }, [])

    //  利用debounce，在每次content改变1s后保存数据
    useDebouncedEffect(
        () => {
            draft = localStorage.getItem('newPost')
            if (content !== '' && content !== draft) {
                localStorage.removeItem('newPost')
                localStorage.setItem('newPost', content)
                message.warning('编辑内容已保存！', 1.5)
            }
        },
        2000,
        [content]
    )

    // modal的处理函数
    const restoreDraft = () => {
        draft = localStorage.getItem('newPost') //  draft参数 useEffect处不能传递到此函数
        if (draft !== null) {
            setContent(draft)
        }
        setModal(false)
    }
    const cleanDraft = () => {
        localStorage.removeItem('newPost')
        setModal(false)
    }

    // 检查draft时阻塞richEditor
    const richTextEditor = (
        <div className="editor">
            <TinymceEditor value={content} onEditorChange={handleContent} />
        </div>
    )

    return (
        <>
            <Card className="editor-card">
                <div className="menu">
                    <Prev />
                    <input
                        type="text"
                        placeholder="请输入标题"
                        className="menu-input"
                        onInput={handleTitle}
                    />
                    <Button
                        type={buttonType.primary}
                        onClick={handleClick}
                        className="menu-button"
                        disabled={btnDisable}
                    >
                        保存并提交
                    </Button>
                </div>
                {modal ? null : richTextEditor}
            </Card>
            <Modal
                visible={modal}
                onClose={() => {
                    setModal(false)
                }}
                title="提示"
                onOk={restoreDraft}
                onCancel={cleanDraft}
            >
                检测到您有未保存的进度内容，是否恢复？
            </Modal>
        </>
    )
}

export default Editor
