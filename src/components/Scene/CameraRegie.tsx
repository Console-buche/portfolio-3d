import { useStore } from '@/stores';
import { ViewMode } from '@/stores/types';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import PerspectiveCamNormalMode from './Cameras/PerspectiveCamNormalMode';
import PerspectiveCamTwitchMode from './Cameras/PerspectiveCamTwitchMode';

interface PerspectiveCamProps {}

function CameraManager(props: PerspectiveCamProps) {
  const { storePortfolio } = useStore();

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
