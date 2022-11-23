import React, { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

function Step(props: IProps) {
    return (
        <div style={{ color: "blue" }}>
            {props?.children}
        </div>
    )
}

export default Step