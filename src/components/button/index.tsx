import React from 'react'
import './index.less'
import classNames from 'classnames'

export enum buttonType {
    primary = 'btn-primary', // 常见蓝底白字按钮 因为用的较多 定为default样式
    basic = 'btn-basic', // modal用的 灰底按钮 黑border按钮
    trigger = 'btn-trigger'
    // '成员'页面 用的 点击与否 导致样式有变 需要一个state 搭配 triggered属性
}

export enum htmlBtnType {
    button = 'button',
    submit = 'submit',
    reset = 'reset'
}

interface Props {
    type: buttonType
    htmlType?: htmlBtnType
    style?: React.CSSProperties
    onClick?: () => void
    disabled?: boolean
    className?: string
    triggered?: boolean
}

const Button: React.FC<Props> = ({
    style,
    onClick,
    children,
    type,
    htmlType = htmlBtnType.button,
    disabled = false,
    className,
    triggered = false
}) => {
    const classes = classNames(
        'button',
        type,
        className,
        { 'btn-disable': disabled },
        { 'btn-triggered': triggered }
    )
    return (
        <>
            {/* eslint-disable react/button-has-type */}
            <button
                type={htmlType}
                className={classes}
                style={style}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
            {/* eslint-disable react/button-has-type */}
        </>
    )
}

export default Button
