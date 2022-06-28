import { CatmullRomCurve3, Vector3 } from 'three';

export const curveTransition = (start: Vector3, middle: Vector3, end: Vector3) => {
  const curve = new CatmullRomCurve3([start, middle, end]);
  return curve;
};
