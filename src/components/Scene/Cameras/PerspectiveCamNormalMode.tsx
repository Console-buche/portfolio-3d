import { normalizeScreenTo3d } from '@/components/utils/normalizeScreenTo3d';
import { useMousePosition } from '@/hooks/mousePosition';
import { useStore } from '@/stores';
import { PerspectiveCamera } from '@react-three/drei';
import { Camera, useFrame } from '@react-three/fiber';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Vector3 } from 'three';

interface IPerspectiveCamNormalModeProps {}

const step = 0.05;
// const destination = new Vector3(1, 3, 5);

function PerspectiveCamNormalMode(props: IPerspectiveCamNormalModeProps) {
  const ref = React.useRef<Camera>();
  const { storeCamera } = useStore();

  const { lerpedPosition } = useMousePosition();

  useFrame(() => {
    // const { x, y } = normalizeScreenTo3d(lerpedPosition.x, lerpedPosition.y);

    if (!ref.current) {
      return null;
    }

    const destination = storeCamera.curveTransition;
    //   lookAtPos.lerp(new Vector3(x, y, 0), step);
    // ref.current.position.set(lookAtPos.x, lookAtPos.y * -1, lookAtPos.z).add(startPos);
    //   storeCamera.updateCurrentCameraPosition(ref.current.position.clone());
    const currentPos = storeCamera.currentCameraPosition.clone().lerp(destination, step);
    const { x, y, z } = currentPos;
    ref.current.position.set(x, y, z);
    ref.current?.lookAt(new Vector3(0, -1, -5));
    storeCamera.updateCurrentCameraPosition(ref.current.position.clone());
  });

  return <PerspectiveCamera makeDefault ref={ref} />;
}

export default observer(PerspectiveCamNormalMode);
