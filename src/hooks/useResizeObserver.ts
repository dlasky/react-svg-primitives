import { useEffect, useRef, useState } from "react";
import { Size } from "../lib/types";

export const useResizeObserver = () => {
  const doc = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState<Size>();
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const [svg] = entries;
      setSize({ width: svg.contentRect.width, height: svg.contentRect.height });
    });
    if (doc.current) {
      observer.observe(doc.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [doc.current]);
  return { size, doc };
};
