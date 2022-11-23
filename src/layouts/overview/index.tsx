import React, { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

function Data(props: IProps) {
    return (
        <div>
            {props?.children}
        </div>
    )
}

export default Data