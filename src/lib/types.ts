import React, { ReactElement, ReactNode } from "react";

type Partial<T> = {
  [P in keyof T]?: T[P];
};

export interface Base {
  id?: string;
  children?: ReactNode;
}

export interface PathChildren {
  id?: string;
  children: ReactElement | ReactElement[];
}

export interface Relative {
  rel?: boolean;
}

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Radius {
  radius?: number;
  radiusX?: number;
  radiusY?: number;
}

export interface Rel {
  rel: boolean;
}

export interface Point1 {
  x1: number;
  y1: number;
}

export interface Point2 {
  x2: number;
  y2: number;
}

export interface PointDelta {
  dx: number;
  dy: number;
}
