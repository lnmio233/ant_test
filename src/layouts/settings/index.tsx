import React, { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

function Bug(props: IProps) {
    return (
        <div>
            {props?.children}
        </div>
    )
}

export default Bug