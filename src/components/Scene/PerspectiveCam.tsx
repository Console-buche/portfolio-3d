import { PerspectiveCamera } from "@react-three/drei";
import { Camera, useFrame } from "@react-three/fiber";
import * as React from "react";
import { Vector3 } from "three";

interface PerspectiveCamProps {}

let lookAtPos = new Vector3();
let step = 0.1;

export function PerspectiveCam(props: PerspectiveCamProps) {
  const ref = React.useRef<Camera>();

  useFrame((state) => {
    ref.current?.lookAt(new Vector3(0, -1, -5));
  });

  return <PerspectiveCamera makeDefault ref={ref} position={[0, 3, 5]} />;
}
