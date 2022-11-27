import { Polygon, Polyline } from "./Polygon"
import React from "react"
import { SVG } from "./SVG"

export const PolyString = () => {
    return <SVG>
        <Polygon points="1,1 10,1 10,11 1,11" />
        <Polyline points="20,20 30,20, 30,30 20,30 20,20" />
    </SVG>
}

export const PolyPoints = () => {
    return <SVG>
        <Polygon points={[{ x: 1, y: 1 }, { x: 10, y: 1 }, { x: 10, y: 11 }, { x: 1, y: 11 }]} />
        <Polyline style={{ stroke: "black" }} points={[{ x: 15, y: 15 }, { x: 30, y: 30 }]} />
    </SVG>
}