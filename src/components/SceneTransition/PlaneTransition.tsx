import { Plane } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Mesh } from 'three';
import { useStore } from '../../stores';
import { fragmentShader } from './Shader/FragmentShader';
import { vertexShader } from './Shader/VertexShader';

interface IPlaneTransitionProps {}

function PlaneTransition(props: IPlaneTransitionProps) {
  const { storePortfolio } = useStore();
  const ref = React.useRef<Mesh>(null);

  const { transitionDirection } = storePortfolio;

  const shaderData = React.useMemo(
    () => ({
      uniforms: {
        time: {
          value: Math.PI / 2
          // value: 0,
        }
      },
      vertexShader,
      fragmentShader
    }),
    []
  );

  useFrame(() => {
    // shaderData.uniforms.time.value += 0.001;
    if (transitionDirection === 'up') {
      shaderData.uniforms.time.value =
        shaderData.uniforms.time.value < Math.PI + 1 ? shaderData.uniforms.time.value + 0.06 : Math.PI + 1;
    }
    if (transitionDirection === 'down') {
      shaderData.uniforms.time.value =
        shaderData.uniforms.time.value > Math.PI / 2 ? shaderData.uniforms.time.value - 0.06 : Math.PI / 2;
    }
  });

  return (
    <Plane ref={ref} scale={[17, 14, 17]}>
      {/* <meshBasicMaterial side={DoubleSide} /> */}
      <shaderMaterial {...shaderData} />
    </Plane>
  );
}

export default observer(PlaneTransition);
