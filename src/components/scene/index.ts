import styles from "./style.css?inline";
import * as THREE from "three";

class Scene extends THREE.Scene {
  constructor() {
    super();
  }
}

class Camera extends THREE.PerspectiveCamera {
  constructor() {
    super(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  }
}

class Renderer extends THREE.WebGLRenderer {
  constructor() {
    super();
    this.setSize(window.innerWidth, window.innerHeight);
  }
}

export class Cube {
  mesh: THREE.Mesh;

  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(geometry, material);
  }

  rotate() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  }
}

export default class SceneComponent extends HTMLElement {
  scene: Scene;
  camera: Camera;
  renderer: Renderer;
  cube: Cube;

  constructor() {
    super();

    this.scene = new Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.cube = new Cube();

    this.init();
    this.addSceneToDOM(this.renderer);
  }

  init() {
    this.scene.add(this.cube.mesh);
    this.camera.position.z = 5;

    this.renderer.setAnimationLoop(this.render.bind(this));
  }

  render() {
    this.cube.rotate();

    this.renderer.render(this.scene, this.camera);
  }

  addSceneToDOM(renderer: Renderer) {
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = styles;

    shadow.appendChild(style);
    shadow.appendChild(renderer.domElement);
  }
}
