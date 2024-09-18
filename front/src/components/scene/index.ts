import Camera from "../../three/camera";
import Cube from "../../three/cube";
import AmbientLight from "../../three/lights/ambient";
import DirectionalLight from "../../three/lights/directional";
import Renderer from "../../three/renderer";
import Scene from "../../three/scene";
import styles from "./style.css?inline";

export default class SceneComponent extends HTMLElement {
  scene: Scene;
  camera: Camera;
  renderer: Renderer;
  ambientLight: AmbientLight;
  directionalLight: DirectionalLight;
  cube: Cube;

  constructor() {
    super();

    this.scene = new Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.ambientLight = new AmbientLight();
    this.directionalLight = new DirectionalLight();
    this.cube = new Cube();

    this.init();
    this.addSceneToDOM(this.renderer);
  }

  init() {
    this.scene.add(this.cube.mesh);
    this.scene.add(this.ambientLight);
    this.scene.add(this.directionalLight);

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
