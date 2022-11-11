import React, { FC } from "react";
import { Point } from "./lib/types";

interface CircleProps extends Point {
  radius: number;
  pathLength?: number;
}

export const Circle: FC<CircleProps> = ({ x, y, radius, pathLength }) => {
  return <circle cx={x} cy={y} r={radius} pathLength={pathLength} />;
};

interface EllipseProps extends Point {
  radiusX: number;
  radiusY: number;
}

export const Ellipse: FC<EllipseProps> = ({ x, y, radiusX, radiusY }) => {
  return <ellipse cx={x} cy={y} rx={radiusX} ry={radiusY}></ellipse>;
};
