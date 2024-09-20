import * as THREE from "three";

export default class Renderer extends THREE.WebGLRenderer {
  constructor() {
    super({ alpha: true, antialias: true });
    this.setSize(window.innerWidth, window.innerHeight);
  }
}
