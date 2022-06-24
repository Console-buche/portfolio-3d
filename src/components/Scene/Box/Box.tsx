import React, { useRef } from 'react';
import { Mesh } from 'three';

interface IBoxProps {
  // velocity: number;
  position: Mesh['position'];
}

function Box(props: IBoxProps) {
  const ref = useRef<Mesh>(null!);

  const [clicked, setClicked] = React.useState(false);

  return (
    <mesh {...props} ref={ref} onClick={() => setClicked(!clicked)}>
      <boxGeometry />
      <meshPhongMaterial color="blue" depthTest={false} />
    </mesh>
  );
}

export default Box;
