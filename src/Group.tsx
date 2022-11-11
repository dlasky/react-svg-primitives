import React, { ReactNode, FC } from "react";

interface GroupProps {
    children? : ReactNode
}

export const Group :FC<GroupProps> = ({ children }) => {
  return <g>{children}</g>;
};
