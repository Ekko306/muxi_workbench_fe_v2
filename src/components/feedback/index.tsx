import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Icon from 'components/icon'
import './index.less'
import Thumbs from 'assets/svg/commonIcon/thumbs.svg'
import ThumbsUp from 'assets/svg/commonIcon/thumbs_up.svg'
import Comment from 'assets/svg/commonIcon/comment.svg'

export enum feedType {
    like = 'like',
    comment = 'comment'
}

interface Props {
    type: feedType
    id: number
    className?: string
    style?: React.CSSProperties
    liked?: boolean
    number?: number
    width?: number
    height?: number
    onClick?: () => void
}

const Feedback: React.FC<Props> = ({
    type = 'like',
    style = {},
    number = 0,
    width = 21,
    height = 21,
    id,
    liked,
    className,
    onClick
}) => {
    const classes = classNames('feedback', className)
    let feedBackContent

    if (type === feedType.like) {
        feedBackContent = (
            <div
                onClick={onClick}
                onKeyPress={onClick}
                role="button"
                tabIndex="0"
                className={classes}
                style={style}
            >
                <Icon src={liked ? ThumbsUp : Thumbs} width={width} height={height} />
                <div className="number">{number}</div>
            </div>
        )
    } else if (type === feedType.comment) {
        feedBackContent = (
            <Link className={classes} style={style} to={`/status/${id}/${liked}/${number}`}>
                <Icon src={Comment} width={width} height={height} />
                <div className="number">{number}</div>
            </Link>
        )
    }

    return <>{feedBackContent}</>
}

export default Feedback
