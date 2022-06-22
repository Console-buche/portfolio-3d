import { action, computed, makeObservable, observable } from 'mobx';
import { Vector3 } from 'three';

export class StoreCamera {
  private $currentCameraPosition = observable.box<Vector3>(new Vector3(0, 0, 0));

  constructor() {
    makeObservable(this);
  }

  @action
  updateCurrentCameraPosition(pos: Vector3) {
    this.$currentCameraPosition.set(pos);
  }

  @computed
  get currentCameraPosition(): Vector3 {
    return this.$currentCameraPosition.get();
  }
}

const StoreCam = new StoreCamera();

export default StoreCam;
