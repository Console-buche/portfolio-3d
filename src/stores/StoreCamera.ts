import { curveTransition } from '@/components/Scene/Cameras/helpers/curveTransition';
import { action, computed, makeObservable, observable } from 'mobx';
import { CatmullRomCurve3, Vector3 } from 'three';

export class StoreCamera {
  private $currentCameraPosition = observable.box<Vector3>(new Vector3(0, 0, 0));

  private $transitionValue = observable.box<number>(0);
  constructor() {
    makeObservable(this);
  }

  private $curveTransition = observable.box<CatmullRomCurve3>(
    curveTransition(new Vector3(1, 3, 5), new Vector3(3, 6, 4), new Vector3(3, 3, 1))
  );

  @action
  updateCurrentCameraPosition(pos: Vector3) {
    this.$currentCameraPosition.set(pos);
  }

  @action
  updateTransitionValue(t: number) {
    this.$transitionValue.set(t);
  }

  @computed
  get currentCameraPosition(): Vector3 {
    return this.$currentCameraPosition.get();
  }

  @computed
  get transitionValue(): number {
    return this.$transitionValue.get();
  }

  @computed
  get curveTransition(): Vector3 {
    return this.$curveTransition.get().getPointAt(this.$transitionValue.get());
  }
}

const StoreCam = new StoreCamera();

export default StoreCam;
