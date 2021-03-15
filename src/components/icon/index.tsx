import React from 'react'
import { ReactSVG } from 'react-svg'
import './index.less'

interface Props {
    src: string
    width?: number
    height?: number
}

const Icon: React.FC<Props> = ({ src, width = 22, height = 22 }) => {
    return (
        <>
            <ReactSVG
                src={src}
                beforeInjection={(svg) => {
                    svg.classList.add('cursor')
                    svg.setAttribute('width', `${width}`)
                    svg.setAttribute('height', `${height}`)
                }}
            />
        </>
    )
}

export default Icon
