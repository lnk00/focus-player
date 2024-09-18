import * as THREE from "three";

export default class Cube {
  mesh: THREE.Mesh;

  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide });
    this.mesh = new THREE.Mesh(geometry, material);
  }

  rotate() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  }
}
