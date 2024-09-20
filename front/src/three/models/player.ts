import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Cursor from "../cursor";

export default class PlayerModel {
  mesh: Group | undefined;

  constructor() {}

  async load() {
    const glb = await new GLTFLoader().loadAsync("/player.glb");
    this.mesh = glb.scene;
  }

  updateRotationWithCursor(cursor: Cursor) {
    this.mesh!.rotation.x = cursor.y * -1;
    this.mesh!.rotation.y = cursor.x * -1;
  }
}
