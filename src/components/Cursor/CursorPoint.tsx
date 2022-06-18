import { useMousePosition } from "@/hooks/mousePosition"
import { Position } from "@react-three/drei/helpers/Position";
import { useFrame } from "@react-three/fiber"
import { createRef, useEffect, useState } from "react";
import { styled, theme } from "../style/Style.config"

interface ICursorPointProps {
}

//
function lerp (start: number, end: number, amt: number){
  return (1-amt)*start+amt*end
}

export function CursorPoint(props: ICursorPointProps) {

  const position = useMousePosition();
  let [x, setX] = useState(0)
  let [y, setY] = useState(0)
  let [isHover, setHover] = useState(false);
  const step = 0.2
  const size = 15
  let CursorPointElement = styled("span", {
    position: "fixed",
    top: y+"px",
    left: x+"px",
    display:"block",
    height: size+"px",
    width: size+"px",
    borderRadius: "15px",
    pointerEvents: "none",
    backgroundColor: theme.colors.button.value,
    transition: "all 2s",
    variants: {
      hover: {
        true: {
          backgroundColor:"transparent",
          border: "3px solid black",
          height: size*1.5+"px",
          width: size*1.5+"px",
        }
      }
    }
  })
  useEffect(() => {
      setX(lerp(x, position.x - size/2, step));
      setY(lerp(y, position.y - size/2, step));
    
  }, [position]);

  useEffect(() => {
    const mouseOver = (e:MouseEvent) => {
      if (e.target instanceof Element) {
        setHover(window.getComputedStyle(e.target)["cursor"] == "pointer");
      }
      
    }
    document.addEventListener("mouseover", mouseOver)
    return () => {
      document.removeEventListener("mouseover", mouseOver)
    }
  }, [])

  return (
    <CursorPointElement hover={isHover}/>
  )
}
