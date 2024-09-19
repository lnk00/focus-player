import { Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Cursor from "../cursor";

export default class PlayerModel {
  mesh: Object3D | undefined;

  constructor() {}

  async load() {
    const glb = await new GLTFLoader().loadAsync("/player.glb");
    this.mesh = glb.scene.children[0];
  }

  updateRotationWithCursor(cursor: Cursor) {
    this.mesh!.rotation.x = cursor.y;
    this.mesh!.rotation.y = cursor.x;
  }

  rotate() {
    if (this.mesh) {
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.01;
    }
  }
}
