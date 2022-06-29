import { Canvas } from '@react-three/fiber';
import { styled } from '@stitches/react';
import { Vector3 } from 'three';
import CameraRegie from './CameraRegie';
import { Office } from './Office/Office';

interface ISceneProps {
  isMenuOpen: boolean;
}

const StyledCanvasContainer = styled('span', {});

const officePosition = new Vector3(3, 0, 0);

function Scene(props: ISceneProps) {
  return (
    <StyledCanvasContainer>
      <Canvas style={{ height: '100vh', width: '100vw' }}>
        <CameraRegie />
        <directionalLight position={[0, 3, 0]} intensity={1} />
        {/* <Box position={new Vector3(2, 2, 0)} /> */}
        <ambientLight color="0xffffff" />
        <Office position={officePosition} />
      </Canvas>
    </StyledCanvasContainer>
  );
}

export default Scene;
