import * as THREE from "three";
import Cursor from "./cursor";

export default class Camera extends THREE.PerspectiveCamera {
  constructor() {
    super(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.position.z = 7;
  }

  updatePositionWithCursor(cursor: Cursor) {
    this.position.x = cursor.x;
    this.position.y = cursor.y;
  }
}
