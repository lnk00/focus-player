import Camera from "../../three/camera";
import AmbientLight from "../../three/lights/ambient";
import DirectionalLight from "../../three/lights/directional";
import PlayerModel from "../../three/models/player";
import Renderer from "../../three/renderer";
import Scene from "../../three/scene";
import styles from "./style.css?inline";

export default class SceneComponent extends HTMLElement {
  scene: Scene;
  camera: Camera;
  renderer: Renderer;
  ambientLight: AmbientLight;
  directionalLight: DirectionalLight;
  playerModel: PlayerModel;

  constructor() {
    super();

    this.scene = new Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.ambientLight = new AmbientLight();
    this.directionalLight = new DirectionalLight();
    this.playerModel = new PlayerModel();
    this.playerModel.load().then(() => {
      this.init();
      this.addSceneToDOM(this.renderer);
    });
  }

  init() {
    this.scene.add(this.ambientLight);
    this.scene.add(this.directionalLight);
    this.scene.add(this.playerModel.mesh!);

    this.renderer.setAnimationLoop(this.render.bind(this));
  }

  render() {
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
