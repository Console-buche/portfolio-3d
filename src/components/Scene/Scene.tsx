import { PerspectiveCamera } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { styled } from "@stitches/react"
import * as React from "react"
import { Vector3 } from "three"
import Box from "./Box/Box"
import { Office } from "./Office/Office"
import { PerspectiveCam } from "./PerspectiveCam"
import { Rain } from "./Rain"

interface ISceneProps {
  isMenuOpen: boolean
}

const StyledCanvasContainer = styled("span", {})

const officePosition = new Vector3(3, 0, 0)

function Scene(props: ISceneProps) {
  return (
    <StyledCanvasContainer>
      <Canvas style={{ height: "100vh", width: "100vw" }} shadows>
        <PerspectiveCam />
        <directionalLight
          position={[0, 3, 0]}
          castShadow
          intensity={1}
          shadow-camera-far={70}
        />
        {/* <Box position={new Vector3(2, 2, 0)} /> */}
        <ambientLight color="0xffffff" />
        <Office position={officePosition} />
      </Canvas>
    </StyledCanvasContainer>
  )
}

export default Scene
