import Camera from "../../three/camera";
import Cursor from "../../three/cursor";
import PlayerModel from "../../three/models/player";
import Renderer from "../../three/renderer";
import Scene from "../../three/scene";
import styles from "./style.css?inline";

export default class SceneComponent extends HTMLElement {
  scene: Scene;
  camera: Camera;
  renderer: Renderer;
  playerModel: PlayerModel;
  cursor: Cursor;

  constructor() {
    super();

    this.scene = new Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.playerModel = new PlayerModel();
    this.cursor = new Cursor();

    this.loadAssets().then(() => {
      this.init();
      this.addSceneToDOM(this.renderer);
    });
  }

  init() {
    this.scene.add(this.playerModel.mesh!);

    this.renderer.setAnimationLoop(this.render.bind(this));
  }

  render() {
    this.camera.updatePositionWithCursor(this.cursor);
    this.playerModel.updateRotationWithCursor(this.cursor);

    this.renderer.render(this.scene, this.camera);
  }

  loadAssets() {
    return Promise.all([this.playerModel.load(), this.scene.loadEnvMap()]);
  }

  addSceneToDOM(renderer: Renderer) {
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = styles;

    shadow.appendChild(style);
    shadow.appendChild(renderer.domElement);
  }
}
