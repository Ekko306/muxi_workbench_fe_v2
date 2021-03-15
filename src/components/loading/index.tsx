import React from 'react'
import './index.less'
import classNames from 'classnames'

interface Props {
    className?: string
}

const Loading: React.FC<Props> = ({ className }) => {
    const baseArr = ['middle-base', 'left-base', 'right-base']
    const randomNum = Math.floor(Math.random() * 3)
    const base = baseArr[randomNum]

    const classes = classNames('load-layer', className)
    const subClasses = classNames('middle-animate', 'load-img', base)
    return (
        <>
            <div className={classes}>
                <div className={subClasses} />
            </div>
        </>
    )
}

export default Loading
