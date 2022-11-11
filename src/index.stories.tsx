import React from 'react'
import { Circle, Ellipse } from './Circle'
import { Line, MoveTo, Path } from './Path'
import { SVG } from './SVG'

export const Example = () => {
    return <SVG>
        <Circle x={20} y={20} radius={20}/>
        <Ellipse x={40} y={40} radiusX={10} radiusY={5}/>
    </SVG>
}