import React, { FC, ReactNode } from "react";
import { useResizeObserver } from "./hooks/useResizeObserver";

interface SVGProps {
  children?: ReactNode;
  render?: (width: number, height: number) => React.ReactNode;
}

export const SVG: FC<SVGProps> = ({ children, render }) => {
  const { doc, size } = useResizeObserver();

  return (
    <svg ref={doc}>
      {render && render(size?.width ?? 0, size?.height ?? 0)}
      {children}
    </svg>
  );
};
