import * as THREE from "three";

export default class AmbientLight extends THREE.AmbientLight {
  constructor() {
    super(0xffffff, 2.0);
  }
}
