import React, { FC, ReactNode } from "react";
import { useDocumentObserver } from "./hooks/useDocumentObserver";

interface Props {
  min: number;
  max: number;
  callback?: (width: number) => void;
  children?: ReactNode;
}

const BreakPoint: FC<Props> = ({ min, max, callback, children }) => {
  const { width } = useDocumentObserver() ?? { width: 0 };
  if (width > min && width < max) {
    callback && callback(width);
    return <>{children}</>;
  }
  return <></>;
};

export default BreakPoint;
