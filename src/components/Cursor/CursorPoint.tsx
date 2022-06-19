import { useMousePosition } from "@/hooks/mousePosition"
import { Position } from "@react-three/drei/helpers/Position";
import { useFrame } from "@react-three/fiber"
import { createRef, useEffect, useRef, useState } from "react";
import { styled, theme } from "../style/Style.config"

interface ICursorPointProps {
}

// TODO: replace with another lerp from another place, I did this function in a hard coded way because i didn't know if there was already a lerp somewhere else or not
function lerp (start: number, end: number, amt: number){
  return (1-amt)*start+amt*end
}

const size = 15
const step = 0.2

let CursorPointElement = styled("span", {
  position: "fixed",
  height: size+"px",
  width: size+"px",
  borderRadius: "50%",
  pointerEvents: "none",
  backgroundColor: theme.colors.button.value,
  transition: "transform .2s",
  zIndex: 10000,
  variants: {
    hover: {
      true: {
        backgroundColor:"transparent",
        border: "2.5px solid black",
        transform: "scale(2)"
      }
    }
  }
})

export function CursorPoint(props: ICursorPointProps) {

  const position = useMousePosition();
  let x = useRef(0);
  let y = useRef(0);
  let [isHover, setHover] = useState(false);
  //TODO: Replace this any with a good type, I didn't know how to do that, i tried typeof CursorPointElement but it didn't worked.
  let pointRef = useRef<any>(null)


  useEffect(() => {
    const interval = setInterval(()=> {
          x.current = lerp(x.current, position.x - size/2, step);
          y.current = lerp(y.current, position.y - size/2, step);
          if (pointRef.current != null) {
            if (pointRef.current instanceof HTMLElement) {
              pointRef.current.style.top = y.current+"px";
              pointRef.current.style.left = x.current+"px";
            }
          }
      }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [position]);

  useEffect(() => {
    const mouseOver = (e:MouseEvent) => {
      if (e.target instanceof Element) {
        //Point get in hover style when cursor is in pointer mode
        setHover(window.getComputedStyle(e.target)["cursor"] == "pointer");
      }
      
    }
    document.addEventListener("mouseover", mouseOver)
    return () => {
      document.removeEventListener("mouseover", mouseOver)
    }
  }, [])

  return (
    <CursorPointElement ref={pointRef} hover={isHover}/>
  )
}
