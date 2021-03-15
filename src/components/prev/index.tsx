import React from 'react'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import Back from 'assets/svg/commonIcon/back.svg'
import Icon from 'components/icon'
import './index.less'

interface Props {
    className?: string
}

const Prev: React.FC<Props> = (className) => {
    const history = useHistory()
    const handleBack = () => {
        history.goBack()
    }
    const classes = classNames('back-button', className)
    return (
        <>
            <div
                onClick={handleBack}
                onKeyPress={handleBack}
                role="button"
                tabIndex="0"
                className={classes}
            >
                <Icon src={Back} width={26} height={26} />
            </div>
        </>
    )
}

export default Prev
