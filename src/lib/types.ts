type Partial<T> = {
    [P in keyof T]?: T[P];
  };

export interface Point {
    x: number
    y: number
}

export interface Point1 {
    x1: number
    y1: number
}

export interface Point2 {
    x2: number
    y2: number
}

export interface PointDelta {
    dx: number
    dy: number
}