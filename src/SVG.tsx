import React, { FC, ReactNode } from 'react'

interface SVGProps {
    children: ReactNode
}

export const SVG : FC<SVGProps> = ({children}) => {
    return <svg>{children}</svg>
}
