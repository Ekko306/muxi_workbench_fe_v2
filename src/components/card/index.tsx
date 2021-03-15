import React from 'react'
import './index.less'
import classNames from 'classnames'
import Loading from 'components/loading'

interface Props {
    style?: React.CSSProperties
    className?: string
    loading?: boolean
    loadClassname?: string
}

const Card: React.FC<Props> = ({ style, children, className, loading = false, loadClassname }) => {
    const classes = classNames('card', className)
    let body
    if (loading) {
        body = (
            <div className={classes}>
                <Loading className={loadClassname} />
            </div>
        )
    } else {
        body = (
            <div className={classes} style={style}>
                {children}
            </div>
        )
    }
    return <>{body}</>
}

export default Card
