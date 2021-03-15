import React, { useState } from 'react'
import './index.less'
import Button, { buttonType } from 'components/button'

enum Group {
    all,
    product,
    frontEnd,
    backEnd,
    android,
    design
}

const Message: React.FC = () => {
    const [trigger, setTrigger] = useState<Array<boolean>>(Array(5).fill(false))
    const group = [
        Group.all,
        Group.product,
        Group.frontEnd,
        Group.backEnd,
        Group.android,
        Group.design
    ]
    const chooseGroup = (choice: Group) => {
        const array = Array(5).fill(false)
        array[choice] = true
        setTrigger(array)
    }
    const groupBtns = group?.map((member) => {
        return (
            <Button
                type={buttonType.trigger}
                triggered={trigger[member]}
                onClick={() => {
                    chooseGroup(member)
                }}
            >
                团队成员
            </Button>
        )
    })
    return <div>{groupBtns}</div>
}

export default Message
