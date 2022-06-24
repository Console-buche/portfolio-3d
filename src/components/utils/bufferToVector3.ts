import { Vector, Vector3 } from 'three';

interface IBufferToVerctor3Options {
  positions: number[];
  chunkSize: number;
}

const bufferToVector3 = (options: IBufferToVerctor3Options): Vector3[] => {
  const { positions, chunkSize } = options;

  const vectors: Vector3[] = [];

  for (let i = 0; i < positions.length - chunkSize; i += chunkSize) {
    const numberChunk = positions.slice(i, i + chunkSize);
    const vector3 = new Vector3(...numberChunk);

    vectors.push(vector3);
  }

  return vectors;
};
export default bufferToVector3;

export const bufferToVector3_neo = (options: IBufferToVerctor3Options): Vector3[] =>
  options.positions.reduce(
    (acc: Vector3[], cur: number, i: number) =>
      i % options.chunkSize === 0
        ? [...acc, new Vector3(cur, options.positions[i + 1], options.positions[i + 2])]
        : acc,
    []
  );
