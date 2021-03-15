import React from 'react'
import './index.less'
import classNames from 'classnames'

export enum alertType {
    success = 'success',
    warning = 'warning',
    danger = 'danger'
}

interface Props {
    type: alertType
    className?: string
    style?: React.CSSProperties
}

const Alert: React.FC<Props> = ({ style, children, type = 'success', className }) => {
    const classes = classNames('alert', `alert-${type}`, className)
    return (
        <>
            <div role="alert" className={classes} style={style}>
                {children}
            </div>
        </>
    )
}

export default Alert
