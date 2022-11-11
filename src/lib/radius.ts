import { Radius } from "./types"

interface RadiusResult {
    rx?: number
    ry?: number
}

export const getRadius = (input: Radius) : RadiusResult => {
    const {radius, radiusX, radiusY} = input
    return {rx: radiusX ?? radius ,ry: radiusY ?? radius}
}