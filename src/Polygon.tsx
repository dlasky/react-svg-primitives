import React, { FC } from "react";
import {Point,Base} from "./lib/types"


type Points = Point[] | string
interface PolyProps extends Base{
  points: Points
}

const isPoints = (input : Points) => {
  return typeof input !== "string"
}

export const Polygon : FC<PolyProps> = ({ points, ...base}) => {
  let pts = points as string
  if (isPoints(points)) {
    pts = (points as Point[]).map(p=>`${p.x},${p.y}`).join(" ")
  }
  return <polygon {...base} points={pts}></polygon>;
};

export const Polyline : FC<PolyProps> = ({ points, ...base}) => {
  let pts = points as string
  if (isPoints(points)) {
    pts = (points as Point[]).map(p=>`${p.x},${p.y}`).join(" ")
  }
  return <polyline {...base} points={pts}></polyline>;
};
