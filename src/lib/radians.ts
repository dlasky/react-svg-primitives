export type Degree = number;
export type Radian = number;

export const toRadians = (deg: Degree): Radian => deg * (Math.PI / 180.0);

export const Sin = (x: Radian) => Math.sin(x);
export const Cos = (x: Radian) => Math.cos(x);
