import Camera from "../../three/camera";
import PlayerModel from "../../three/models/player";
import Renderer from "../../three/renderer";
import Scene from "../../three/scene";
import styles from "./style.css?inline";

export default class SceneComponent extends HTMLElement {
  scene: Scene;
  camera: Camera;
  renderer: Renderer;
  playerModel: PlayerModel;

  constructor() {
    super();

    this.scene = new Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.playerModel = new PlayerModel();
    this.playerModel.load().then(() => {
      this.init();
      this.addSceneToDOM(this.renderer);
    });
  }

  init() {
    this.scene.setupEnvMap();
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
