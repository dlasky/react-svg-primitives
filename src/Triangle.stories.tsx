import React from "react";
import Triangle from "./Triangle";
import { SVG } from "./SVG";

export const Example = () => {
  return (
    <SVG
      render={(width, _) => <Triangle length={width / 2} rotation={30} />}
    ></SVG>
  );
};
