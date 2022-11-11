import React, { FC } from "react";
import { getRadius } from "./lib/radius";
import { Point, Radius, Size } from "./lib/types";

export const Rect: FC<Point & Size & Radius> = ({
  x,
  y,
  width,
  height,
  radiusX,
  radiusY,
  radius,
}) => {
  const { rx, ry } = getRadius({ radius, radiusX, radiusY });
  return <rect x={x} y={y} width={width} height={height} rx={rx} ry={ry} />;
};
