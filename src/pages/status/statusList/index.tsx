import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './index.less'
import Card from 'components/card'
import Icon from 'components/icon'
import Loading from 'components/loading'
import Top from 'assets/svg/commonIcon/top.svg'
import Feedback, { feedType } from 'components/feedback'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchStatusList,
    fetchStatusMore,
    putLikeInfo,
    selectAllStatus,
    selectLoading
} from 'store/features/statusList/statusListSlice'

const StatusList: React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const statusArray = useSelector(selectAllStatus)
    const loading = useSelector(selectLoading)

    // 首次请求数据(page=0) & 处理scroll
    useEffect(() => {
        if (loading === 'idle') {
            window.onunload = () => {
                window.scrollTo(0, 0)
            } // 按 command + R 刷新取消浏览器记住滚动条位置
            dispatch(fetchStatusList())
        }
    }, [loading, dispatch])

    // 触碰到statusList底部加载更多一页数据 & 点击上拉按钮scroll逻辑
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return
        dispatch(fetchStatusMore())
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // 更新redux的status的likeInfo
    let numUpdated
    let likedUpdated
    const onClickLike = (id: number, likeNum: number, liked?: boolean): void | undefined => {
        API.status.putStatusLikeById.request({ id }, { liked }).then(() => {
            numUpdated = likeNum + (liked ? -1 : 1)
            likedUpdated = !liked
            dispatch(putLikeInfo({ id, likeNew: likedUpdated, likeNum: numUpdated }))
        })
    }

    // statusList的map小评论子组件
    const statusContent = statusArray?.map((instance) => {
        return (
            <Card className="status-item" key={instance.id}>
                <div className="information">
                    <img alt="avatar" className="avatar" src={instance.avatar} />
                    <div className="details">
                        <div className="name">{instance.username}</div>
                        <div className="date">{instance.time}</div>
                    </div>
                    <Link className="link" to={`/status/${instance.id}`}>
                        详情
                    </Link>
                </div>
                <div
                    className="content"
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => history.push(`/status/${instance.id}`)}
                    onClick={() => history.push(`/status/${instance.id}`)}
                >
                    <div className="height-constraint">
                        {/* eslint-disable-next-line react/no-danger */}
                        <div dangerouslySetInnerHTML={{ __html: instance.content }} />
                    </div>
                </div>
                <div className="interaction">
                    <Feedback
                        number={instance.comment_count}
                        type={feedType.comment}
                        className="feedback-comment"
                        id={instance.id}
                        liked={instance.liked}
                    />
                    <Feedback
                        id={instance.id}
                        number={instance.like_count}
                        type={feedType.like}
                        liked={instance.liked}
                        onClick={() => {
                            onClickLike(instance.id, instance.like_count, instance.liked)
                        }}
                    />
                </div>
            </Card>
        )
    })

    let statusList
    if (statusArray.length === 0) {
        statusList = <Loading className="list-loading" />
    } else {
        statusList = (
            <div className="status-list">
                {statusContent}
                <div
                    role="button"
                    tabIndex="0"
                    className="to-top"
                    onKeyPress={scrollToTop}
                    onClick={scrollToTop}
                >
                    <Icon src={Top} width={80} height={80} />
                </div>
                <div
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => {
                        dispatch(fetchStatusMore())
                    }}
                    onClick={() => {
                        dispatch(fetchStatusMore())
                    }}
                >
                    下拉加载更多...
                </div>
            </div>
        )
    }

    return <>{statusList}</>
}

export default StatusList
