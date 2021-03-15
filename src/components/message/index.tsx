import React from 'react'
import RCNotification from 'rc-notification'
import { NotificationInstance } from 'rc-notification/lib/Notification'
import 'rc-notification/assets/index.less'
import Alert, { alertType } from 'components/alert'

let notification: NotificationInstance
RCNotification.newInstance(
    {
        maxCount: 3,
        style: { transform: 'translateX(-50%)', left: '50%', top: '65px' }
    },
    (n) => {
        notification = n
    }
)

const initialStyle = { padding: 0, boxShadow: 'none', border: '3px' }

const messageApi = {
    success: (content: string, duration: number, onClose?: () => void) => {
        notification.notice({
            duration,
            content: <Alert type={alertType.success}>{content}</Alert>,
            style: initialStyle,
            onClose
        })
    },
    warning: (content: string, duration: number, onClose?: () => void) => {
        notification.notice({
            duration,
            content: <Alert type={alertType.warning}>{content}</Alert>,
            style: initialStyle,
            onClose
        })
    },
    danger: (content: string, duration: number, onClose?: () => void) => {
        notification.notice({
            duration,
            content: <Alert type={alertType.danger}>{content}</Alert>,
            style: initialStyle,
            onClose
        })
    }
}

export default messageApi
