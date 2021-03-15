import React from 'react'
import './index.less'
import classNames from 'classnames'
import Button, { buttonType } from 'components/button'

interface Props {
    className?: string
    visible: boolean
    closable?: boolean
    onClose?: () => void
    title?: string
    okText?: string
    cancelText?: string
    onOk?: () => void
    onCancel?: () => void
    footer?: React.ReactNode // 自定义footer 完全重写footer
}

interface footerProps {
    okText?: string
    cancelText?: string
    onOk?: () => void
    onCancel?: () => void
}

const DefaultFooter: React.FC<footerProps> = ({ okText, cancelText, onOk, onCancel }) => (
    <div className="modal-footer">
        <Button type={buttonType.basic} className="footer-ensure" onClick={onOk}>
            {okText}
        </Button>
        <Button type={buttonType.basic} onClick={onCancel}>
            {cancelText}
        </Button>
    </div>
)

const Modal: React.FC<Props> = ({
    className,
    children,
    visible,
    closable = true,
    onClose,
    footer,
    title,
    okText = '确定',
    cancelText = '取消',
    onOk,
    onCancel
}) => {
    const classes = classNames('modal-body', className)
    const closeBtn = closable ? (
        <button type="button" className="modal-close" onClick={onClose}>
            close
        </button>
    ) : null

    if (footer === undefined) {
        footer = (
            <DefaultFooter
                onOk={onOk}
                onCancel={onCancel}
                okText={okText}
                cancelText={cancelText}
            />
        )
    }
    let content
    if (visible) {
        content = (
            <div className="modal">
                <div className="modal-backdrop" />
                <div className={classes}>
                    <div className="modal-title">{title}</div>
                    {closeBtn}
                    <hr />
                    <div className="modal-content">{children}</div>
                    <hr />
                    {footer}
                </div>
            </div>
        )
    } else {
        content = null
    }
    return <>{content}</>
}

export default Modal
