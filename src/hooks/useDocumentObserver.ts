import { useEffect, useState } from "react";
import { Size } from "../lib/types";

export const useDocumentObserver = () => {
  const [size, setSize] = useState<Size>();

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: document.body.offsetWidth,
        height: document.body.offsetHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
