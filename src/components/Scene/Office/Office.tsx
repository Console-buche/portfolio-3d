import { useLoader } from '@react-three/fiber';
import * as React from 'react';
import { CatmullRomCurve3, MeshBasicMaterial, TextureLoader, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { bufferToVector3_neo } from '../../utils/bufferToVector3';

interface IOfficeProps {
  position: Vector3;
}

export function Office(props: IOfficeProps) {
  const gltf = useLoader(GLTFLoader, '/src/assets/gltf/V3.5.gltf');
  const [lightPositions, setLightPositions] = React.useState<Vector3[]>([]);

  const { position } = props;

  React.useEffect(() => {
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(position.x, position.y, position.z);
    gltf.scene.rotation.set(0, -1.25, 0);

    //TODO : faire ça PROPRE !!!!!!!
    const ecran = gltf.scene.children[1];
    const mat = new TextureLoader().load('/src/assets/img/buche.jpg', (map) => {
      const m = new MeshBasicMaterial({ map });
      ecran.material = m;
    });

    // @ts-expect-error We should find the correct type for this
    const positionBuffer = gltf.scene.children[14].geometry.attributes.position.array;

    const lightsPositionsAsVector3 = bufferToVector3_neo({
      positions: positionBuffer,
      chunkSize: 3
    });

    const lightCurve = new CatmullRomCurve3(lightsPositionsAsVector3);
    const tenPoints = lightCurve.getSpacedPoints(10);

    setLightPositions(tenPoints);
  }, []);

  return (
    <React.Suspense fallback={null}>
      <primitive object={gltf.scene}></primitive>
    </React.Suspense>
  );
}
