import { useEffect, useState } from "react";

export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0, oldX: 0, oldY: 0 });
  
    useEffect(() => {
      const setFromEvent = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY, oldX: position.x, oldY: position.y });
      window.addEventListener("mousemove", setFromEvent);
  
      return () => {
        window.removeEventListener("mousemove", setFromEvent);
      };
    }, []);
  
    return position;
  };
  