import React from 'react'

export const Rect = ({x,y, width, height, radiusX, radiusY}) => {
    return <rect x={x} y={y} width={width} height={height} rx={radiusX} ry={radiusY}/>
}