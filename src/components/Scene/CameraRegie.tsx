import { useStore } from '@/stores';
import { ViewMode } from '@/stores/types';
import { useFrame } from '@react-three/fiber';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import PerspectiveCamNormalMode from './Cameras/PerspectiveCamNormalMode';
import PerspectiveCamTwitchMode from './Cameras/PerspectiveCamTwitchMode';

interface PerspectiveCamProps {}

let t = 0;

function CameraManager(props: PerspectiveCamProps) {
  const { storePortfolio, storeCamera } = useStore();

  useFrame(() => {
    if (storePortfolio.viewMode === ViewMode.normal && t > 0) {
      t = Math.min(t - 0.01, 0);
    }
    if (storePortfolio.viewMode === ViewMode.twitchCam && t < 1) {
      t = Math.max(t + 0.01, 1);
    }
    storeCamera.updateTransitionValue(t);
  });

  const getActiveCamera = () => {
    switch (storePortfolio.viewMode) {
      case ViewMode.normal:
        return <PerspectiveCamNormalMode />;
      case ViewMode.twitchCam:
        return <PerspectiveCamTwitchMode />;
    }
  };

  return getActiveCamera();
}

export default observer(CameraManager);
