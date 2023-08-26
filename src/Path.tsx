import React, { Children, FC, ReactElement, ReactNode } from "react";
import {
  Base,
  PathChildren,
  Point,
  Point1,
  Point2,
  Radius,
  Relative,
} from "./lib/types";
import { getRadius } from "./lib/radius";

type ReactStringable = ReactNode & ReactElement;

const relPrefix = (rel: boolean, prefix: string) =>
  rel ? prefix.toLowerCase() : prefix.toUpperCase();

export const Path: FC<PathChildren> = (props) => {
  const { children = [], ...p } = props;
  const d = Children.map(children, (child) => {
    //@ts-ignore
    return child.type(child.props);
  }).join("");
  const autoClose = d[-1] !== "z";
  return <path {...p} d={autoClose ? `${d}z` : d} />;
};

export const Move: FC<Partial<Point> & Relative> = ({
  x = 0,
  y = 0,
  rel = false,
}) => {
  return `${relPrefix(rel, "M")} ${x} ${y}` as ReactStringable;
};

export const Line: FC<Partial<Point> & Relative> = ({
  x = 0,
  y = 0,
  rel = false,
}) => {
  return `${relPrefix(rel, "L")} ${x} ${y}` as ReactStringable;
};

export const Horizontal: FC<Omit<Point, "y"> & Relative> = ({
  x,
  rel = false,
}) => {
  return `${relPrefix(rel, "h")} ${x}` as ReactStringable;
};

export const Vertical: FC<Omit<Point, "x"> & Relative> = ({
  y,
  rel = false,
}) => {
  return `${relPrefix(rel, "v")} ${y}` as ReactStringable;
};

export const Cubic: FC<
  Partial<Point2> & Partial<Point1> & Partial<Point> & Relative
> = ({ x1 = 0, y1 = 0, x2 = 0, y2 = 0, x = 0, y = 0, rel = false }) => {
  return `${relPrefix(
    rel,
    "c"
  )} ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}` as ReactStringable;
};

export const SimpleCubic: FC<Partial<Point> & Partial<Point2> & Relative> = ({
  x = 0,
  y = 0,
  x2 = 0,
  y2 = 0,
  rel = false,
}) => {
  return `${relPrefix(rel, "s")} ${x2} ${y2}, ${x} ${y}` as ReactStringable;
};

export const Quadratic: FC<Partial<Point1> & Partial<Point> & Relative> = ({
  x1 = 0,
  y1 = 0,
  x = 0,
  y = 0,
  rel = false,
}) => {
  return `${relPrefix(rel, "q")} ${x1} ${y1}, ${x} ${y}` as ReactStringable;
};

export const SimpleQuadratic: FC<Partial<Point> & Relative> = ({
  x = 0,
  y = 0,
  rel = false,
}) => {
  return `${relPrefix(rel, "t")} ${x} ${y}` as ReactStringable;
};

interface Arc {
  largeArc: boolean;
  sweep: boolean;
  rotation: number;
}

export const Arc: FC<
  Partial<Arc> & Partial<Radius> & Partial<Point> & Relative
> = ({
  radius,
  radiusX,
  radiusY,
  rotation = 0,
  largeArc = false,
  sweep = false,
  x = 0,
  y = 0,
  rel = false,
}) => {
  const { rx, ry } = getRadius({ radius, radiusX, radiusY });

  return `${relPrefix(rel, "a")} ${rx} ${ry} ${rotation} ${
    largeArc ? "1" : "0"
  } ${sweep ? "1" : "0"} ${x} ${y}` as ReactStringable;
};

export const Close = () => "z";
