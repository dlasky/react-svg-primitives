import React, { FC } from "react";
import { Line, Move, Path } from "./Path";
import { Degree, toRadians } from "./lib/radians";
import { Point } from "./lib/types";

export type TriangleType = "equilateral";

type Props = {
  length: number;
  type?: TriangleType;
  rotation?: number;
};

const getCoords = (length: number, angle: Degree, rotation: Degree): Point => {
  const rad = toRadians(angle + rotation);
  return {
    x: length * Math.cos(rad) + length,
    y: length * Math.sin(rad) + length,
  };
};

const Triangle: FC<Props> = ({
  length,
  type = "equilateral",
  rotation = 0,
}) => {
  if (type === "equilateral") {
    return (
      <Path>
        <Move {...getCoords(length, 0, rotation)} />
        <Line {...getCoords(length, 120, rotation)} />
        <Line {...getCoords(length, 240, rotation)} />
      </Path>
    );
  }
};

export default Triangle;
