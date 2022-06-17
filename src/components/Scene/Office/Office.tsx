import { useLoader } from "@react-three/fiber";
import * as React from "react";
import { CatmullRomCurve3, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { bufferToVector3_neo } from "@/utils/bufferToVector3";

interface IOfficeProps {
  position: Vector3;
}

export function Office(props: IOfficeProps) {
  const gltf = useLoader(GLTFLoader, "/V3.5.gltf");
  const [lightPositions, setLightPositions] = React.useState<Vector3[]>([]);

  const { position } = props;
  console.log(gltf);

  React.useEffect(() => {
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(position.x, position.y, position.z);
    gltf.scene.rotation.set(0, -1.25, 0);
    gltf.scene.receiveShadow = true;

    gltf.scene.children.forEach((node, i) => {
      gltf.scene.children[i].receiveShadow = true;
    });

    const positionBuffer =
      gltf.scene.children[14].geometry.attributes.position.array;

    const lightsPositionsAsVector3 = bufferToVector3_neo({
      positions: positionBuffer,
      chunkSize: 3,
    });

    const lightCurve = new CatmullRomCurve3(lightsPositionsAsVector3);
    const tenPoints = lightCurve.getSpacedPoints(10);

    setLightPositions(tenPoints);
  }, []);

  return (
    <React.Suspense fallback={null}>
      <primitive object={gltf.scene}>
        {/* {lightPositions.map((lightPos) => (
          <Box
            position={new Vector3(lightPos.x, lightPos.y + 30, lightPos.z)}
          />
          //   <pointLight
          //     color="#FAFA20"
          //     intensity={0.5}
          //     position={new Vector3(lightPos.x, lightPos.y + 30, lightPos.z)}
          //     shadowBias={0.00001}
          //     shadowMapHeight={2048}
          //     shadowMapWidth={2048}
          //     castShadow
          //   />
        ))} */}
      </primitive>
    </React.Suspense>
  );
}
