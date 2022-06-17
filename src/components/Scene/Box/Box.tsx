import THREE, { MeshProps, useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import * as three from "three";
import { Mesh, MeshBasicMaterial } from "three";

interface IBoxProps {
  // velocity: number;
  position: Mesh["position"];
}

function Box(props: IBoxProps) {
  const ref = useRef<Mesh>(null!);

  const [clicked, setClicked] = React.useState(false);

  return (
    <mesh {...props} ref={ref} onClick={() => setClicked(!clicked)}>
      <boxGeometry />
      <meshPhongMaterial color="blue" depthTest={false} />
    </mesh>
  );
}

export default Box;
