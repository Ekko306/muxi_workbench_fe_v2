import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Prev from 'components/prev'
import Card from 'components/card'
import Feedback, { feedType } from 'components/feedback'
import Button, { buttonType, htmlBtnType } from 'components/button'
import './index.less'
import { putCommentNum, putLikeInfo } from 'store/features/statusList/statusListSlice'
import {
    fetchStatusDtl,
    selectLoading,
    selectStatusDtl
} from 'store/features/statusDetail/statusDetailSlice'
import message from 'components/message'
import Modal from 'components/modal'

interface ParamTypes {
    id: string
    liked: string
    likeNum: string
}

const StatusDetail: React.FC = () => {
    const { id } = useParams<ParamTypes>()
    const idInt = parseInt(id, 10)
    const dispatch = useDispatch()

    const statusDtl = useSelector(selectStatusDtl)
    const loading = useSelector(selectLoading) === 'pending'

    //  因为下面数据是页面会动态改变的 存储在page的state
    const [comments, setComments] = useState<Array<defs.Comment>>([])
    const [likeNumbers, setLikeNumbers] = useState<number>(0)
    const [likedBoolean, setLikedBoolean] = useState<boolean>(false)
    useEffect(() => {
        setComments(statusDtl.comments)
        setLikeNumbers(statusDtl.statusInfo.like_count)
        setLikedBoolean(statusDtl.statusInfo.liked)
    }, [statusDtl])

    // 首次fetch两数据: statusDetail & comments
    useEffect(() => {
        dispatch(fetchStatusDtl(idInt))
        window.scrollTo(0, 0)
    }, [])

    // 更新CommentNumber
    useEffect(() => {
        dispatch(putCommentNum({ id: idInt, commentNum: comments.length }))
    }, [comments])

    // 存储 & 更新likeInfo
    let numUpdated
    let likedUpdated
    const onClickLike = (likeId: number, likeNumber: number, isLike: boolean): void | undefined => {
        API.status.putStatusLikeById.request({ id: likeId }, { liked: isLike }).then(() => {
            numUpdated = likeNumber + (isLike ? -1 : 1)
            likedUpdated = !isLike
            setLikedBoolean(likedUpdated)
            setLikeNumbers(numUpdated)
            dispatch(putLikeInfo({ id: likeId, likeNew: likedUpdated, likeNum: numUpdated }))
        })
    }

    // 存储自己评论信息 & 发布
    const [formData, setFormData] = useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (formData === '') {
            message.danger('评论不能为空！', 2)
        } else {
            API.status.postStatusCommentById
                .request({ id: idInt }, { content: formData })
                .then(() => {
                    API.status.getStatusDetailByIdComments.request({ id: idInt }).then((res) => {
                        setComments(res.data.commentlist)
                        setFormData('')
                    })
                    message.success('评论成功！', 2)
                })
        }
    }

    // 评论列表map子组件
    const commentsList = comments.map((instance) => {
        return (
            <div className="comments-list" key={instance.cid}>
                <div className="inform">
                    <img alt="avatar" className="image" src={instance.avatar} />
                    <div className="name">{instance.username}</div>
                    <div className="time">{instance.time}</div>
                </div>
                <div className="content">{instance.content}</div>
            </div>
        )
    })

    const { userid, sid, title } = statusDtl.statusInfo
    const isUserSelf = userid === parseInt(localStorage.getItem('id') as string, 10)
    const [modal, setModal] = useState<boolean>(false)
    const deleteStatus = () => {
        API.status.deleteStatusDetailById.request({ id: sid }, { title }).then((res) => {
            console.log(res)
            if (res.message === 'ok') {
                message.success('删除成功', 1.5)
            }
        })
    }
    const cancelDelete = () => {
        setModal(false)
    }

    return (
        <Card className="status-detail" loadClassname="status-load" loading={loading}>
            <div className="status-card">
                <div className="header">
                    <Prev />
                    <div className="inform">
                        <div className="title">{statusDtl.statusInfo.title}</div>
                        <div className="time">{statusDtl.statusInfo.time}</div>
                    </div>
                    {isUserSelf ? (
                        <div className="operate">
                            <div className="edit">编辑</div>
                            <div
                                role="button"
                                tabIndex="0"
                                className="delete"
                                onClick={() => {
                                    setModal(true)
                                }}
                                onKeyDown={() => {
                                    setModal(true)
                                }}
                            >
                                删除
                            </div>
                        </div>
                    ) : null}
                    <div className="like">
                        <Feedback
                            className="feedback-like"
                            type={feedType.like}
                            width={26}
                            height={26}
                            id={idInt}
                            liked={likedBoolean}
                            number={likeNumbers}
                            onClick={() => {
                                onClickLike(idInt, likeNumbers, likedBoolean)
                            }}
                        />
                    </div>
                </div>
                <div className="body">
                    <div className="height-constraint">
                        {/* eslint-disable-next-line react/no-danger */}
                        <div dangerouslySetInnerHTML={{ __html: statusDtl.statusInfo.content }} />
                    </div>
                </div>
                <hr className="newline" />
                {commentsList}
                <div className="comment">
                    <img
                        className="avatar"
                        alt="123"
                        src="https://static.muxixyz.com/workbench/avatar/4.png"
                    />
                    <form className="interact" onSubmit={handleSubmit}>
                        <textarea
                            className="text-input"
                            placeholder=" 发表评论..."
                            value={formData}
                            onChange={handleChange}
                        />
                        <Button
                            type={buttonType.primary}
                            htmlType={htmlBtnType.submit}
                            className="submit-button"
                        >
                            发表
                        </Button>
                    </form>
                </div>
            </div>
            <Modal
                visible={modal}
                onClose={() => {
                    setModal(false)
                }}
                title="提示"
                onOk={deleteStatus}
                onCancel={cancelDelete}
            >
                确定要删除本条进度？
            </Modal>
        </Card>
    )
}

export default StatusDetail
