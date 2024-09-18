import * as THREE from "three";

export default class DirectionalLight extends THREE.DirectionalLight {
  constructor() {
    super(0xffffff, 3.0);
    this.position.set(0.32, 0.39, 0.7);
  }
}
