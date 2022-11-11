import React, { Children, FC, ReactElement, ReactNode } from "react";
import { Point, PointDelta } from "./lib/types";

type ReactStringable = ReactNode & ReactElement

export const Path = (props) => {
  const { children, ...p } = props;
  const d = Children.map(children, (child) => child.type(child.props)).join("");
  const autoClose = d[-1] !== "z";
  return <path {...p} d={autoClose ? `${d}z` : d} />;
};

export const Move : FC<Partial<Point>> = ({ x = 0 , y = 0 }) => {
  return `M ${x} ${y}` as ReactStringable
};

export const RelMove : FC<PointDelta> = ({ dx, dy }) => {
  return `m ${dx} ${dy}` as ReactStringable;
};

//TODO: split these into relative components as well
export const Line : FC<Partial<Point> & Partial<PointDelta>> = ({ x, y, dx, dy }) => {
  if (x != null && y != null) {
    return `L ${x} ${y}` as ReactStringable;
  } else if (dx != null && dy != null) {
    return `l ${dx} ${dy}` as ReactStringable;
  } else if (x != null) {
    return `H ${x}` as ReactStringable;
  } else if (y != null) {
    return `V ${y}` as ReactStringable;
  } else if (dx != null) {
    return `h ${dx}` as ReactStringable;
  } else if (dy != null) {
    return `v ${dy}` as ReactStringable;
  }
  throw new Error("Invalid props for Line");
};

//TODO: split these into relative components as well
export const Cubic = ({ x1, y1, x2, y2, x, y, dx1, dy1, dx2, dy2, dx, dy }) => {
  if (
    x1 != null &&
    y1 != null &&
    x2 != null &&
    y2 != null &&
    x != null &&
    y != null
  ) {
    return `C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`;
  } else if (
    dx1 != null &&
    dy1 != null &&
    dx2 != null &&
    dy2 != null &&
    dx != null &&
    dy != null
  ) {
    return `c ${dx1} ${dy1}, ${dx2} ${dy2}, ${dx} ${dy}`;
  } else if (x2 != null && y2 != null && x != null && y != null) {
    return `S ${x2} ${y2}, ${x} ${y}`;
  } else if (dx2 != null && dy2 != null && dx != null && dy != null) {
    return `s ${dx2} ${dy2}, ${dx} ${dy}`;
  }
  throw new Error("Invalid props for Cubic");
};

//TODO: split these into relative components as well
export const Quadratic = ({ x1, y1, x, y, dx1, dy1, dx, dy }) => {
  if (x1 != null && y1 != null && x != null && y != null) {
    return `Q ${x1} ${y1}, ${x} ${y}`;
  } else if (dx1 != null && dy1 != null && dx != null && dy != null) {
    return `q ${dx1} ${dy1}, ${dx} ${dy}`;
  } else if (x != null && y != null) {
    return `T ${x} ${y}`;
  } else if (dx != null && dy != null) {
    return `t ${dx} ${dy}`;
  }
  throw new Error("Invalid props for Quadratic");
};

//TODO: split these into relative components as well
export const Arc = ({
  rx,
  ry,
  rotation = 0,
  largeArc,
  sweep,
  x,
  y,
  dx,
  dy,
}) => {
  if (rx != null && ry != null && x != null && y != null) {
    return `A ${rx} ${ry} ${rotation} ${largeArc ? "1" : "0"} ${
      sweep ? "1" : "0"
    } ${x} ${y}`;
  } else if (rx != null && ry != null && dx != null && dy != null) {
    return `a ${rx} ${ry} ${rotation} ${largeArc ? "1" : "0"} ${
      sweep ? "1" : "0"
    } ${dx} ${dy}`;
  }
  throw new Error("Invalid props for Arc");
};

export const Close = () => "z";
