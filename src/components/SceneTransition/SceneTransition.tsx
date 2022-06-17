import { Plane } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { styled } from "@stitches/react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores";
import { PerspectiveCam } from "../Scene/PerspectiveCam";
import PlaneTransition from "./PlaneTransition";

interface ISceneTransitionProps {}

function SceneTransition(props: ISceneTransitionProps) {
  const { storePortfolio } = useStore();
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        pointerEvents: "none",
        zIndex: 999,
      }}
    >
      <PlaneTransition />
    </Canvas>
  );
}

export default SceneTransition;
