import styles from "./style.css?inline";

export default class PlayerScene extends HTMLElement {
  constructor() {
    super();

    const wrapper = this.createScene();
    const style = this.createStyle();

    this.createShadowDom(style, wrapper);
  }

  // ELEMENTS FACTORIES
  createScene() {
    const scene = document.createElement("div");
    scene.id = "scene";
    return scene;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = styles;

    return style;
  }

  createShadowDom(style: HTMLStyleElement, wrapper: HTMLElement) {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}
