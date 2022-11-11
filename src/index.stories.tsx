import React from 'react'
import { Circle, Ellipse } from './Circle'
import { Line, Move, Path } from './Path'
import { SVG } from './SVG'

export const Example = () => {
    return <SVG>
        <Circle x={20} y={20} radius={20}/>
        <Ellipse x={40} y={40} radiusX={10} radiusY={5}/>
        <Path>
            <Move/>
            <Line x={10} y={0}/> 
            <Line x={10} y={10}/>
            <Line x={0} y={10}/>
        </Path>
    </SVG>
}