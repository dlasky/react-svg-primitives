import React, { FC } from "react";
import {Point,Base} from "./lib/types"


type Points = Point[] | string
interface PolygonProps extends Base{
  points: Points
}

const isPoints = (input : Points) => {
  return typeof input !== "string"
}

const Polygon : FC<PolygonProps> = ({ points, ...base}) => {
  let pts = points as string
  if (isPoints(points)) {
    pts = (points as Point[]).map(p=>`${p.x},${p.y}`).join(" ")
  }
  return <polygon {...base} points={pts}></polygon>;
};

export default Polygon