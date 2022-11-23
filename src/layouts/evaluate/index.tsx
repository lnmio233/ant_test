import React, { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

function Before(props: IProps) {
    return (
        <div>
            {props?.children}
        </div>
    )
}

export default Before