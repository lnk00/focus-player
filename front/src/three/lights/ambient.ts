import * as THREE from "three";

export default class AmbientLight extends THREE.AmbientLight {
  constructor() {
    super(0x7c7c7c, 3.0);
  }
}
