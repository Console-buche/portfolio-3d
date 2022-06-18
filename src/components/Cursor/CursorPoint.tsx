import { useMousePosition } from "@/hooks/mousePosition"
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
    backgroundColor: theme.colors.button.value
  })
  setTimeout(() => {
    setX(lerp(x, position.x - size/2, step));
    setY(lerp(y, position.y - size/2, step));
  }, 15)

  return (
    <CursorPointElement/>
  )
}
