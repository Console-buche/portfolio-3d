import { PerspectiveCamera } from "@react-three/drei";
import { Camera, useFrame } from "@react-three/fiber";
import * as React from "react";
import { Vector3 } from "three";

interface PerspectiveCamProps {}

let lookAtPos = new Vector3();
let step = 0.1;
const startPos = new Vector3(1, 3, 5);

export function PerspectiveCam(props: PerspectiveCamProps) {
  const ref = React.useRef<Camera>();

  useFrame((state) => {
    ref.current?.lookAt(new Vector3(0, -1, -5));

    const { x, y } = state.mouse;

    if (ref.current) {
      lookAtPos.lerp(new Vector3(x, y, 0), step);

      ref.current.position
        .set(lookAtPos.x, lookAtPos.y, lookAtPos.z)
        .add(startPos);
    }
  });

  return <PerspectiveCamera makeDefault ref={ref} position={[0, 3, 5]} />;
}
