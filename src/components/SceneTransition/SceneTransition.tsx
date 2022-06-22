import { Canvas } from '@react-three/fiber';
import { useStore } from '../../stores';
import PlaneTransition from './PlaneTransition';

interface ISceneTransitionProps {}

function SceneTransition(props: ISceneTransitionProps) {
  const { storePortfolio } = useStore();
  return (
    <Canvas
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 999
      }}
    >
      <PlaneTransition />
    </Canvas>
  );
}

export default SceneTransition;
