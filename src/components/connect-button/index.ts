import anime from "animejs/lib/anime.es.js";
import styles from "./style.css?inline";

export default class ConnectButton extends HTMLElement {
  isMouseOver = false;

  constructor() {
    super();

    const logo = this.createLogo();
    const label = this.createLabel();
    const scaleEffect = this.createScaleEffect();
    const button = this.createButton(logo, label);
    const wrapper = this.createWrapper(scaleEffect, button);
    const style = this.createStyle();

    this.handleMouseEvents(button, scaleEffect);
    this.createShadowDom(style, wrapper);
  }

  // PROPS GETTERS / SETTERS
  static get observedAttributes() {
    return ["color", "label", "logo"];
  }

  get color() {
    return this.getAttribute("color") || "red";
  }

  set color(value: string) {
    this.setAttribute("color", value);
  }

  get label() {
    return this.getAttribute("label") || "connect";
  }

  set label(value: string) {
    this.setAttribute("label", value);
  }

  get logo() {
    return this.getAttribute("logo") || "/vite.svg";
  }

  set logo(value: string) {
    this.setAttribute("logo", value);
  }

  // ELEMENTS FACTORIES
  createWrapper(scaleEffect: HTMLElement, button: HTMLElement) {
    const wrapper = document.createElement("div");
    wrapper.id = "wrapper";

    wrapper.appendChild(scaleEffect);
    wrapper.appendChild(button);

    return wrapper;
  }

  createScaleEffect() {
    const scaleEffect = document.createElement("div");
    scaleEffect.id = "scale_effect";
    scaleEffect.style.backgroundColor = this.color;

    return scaleEffect;
  }

  createButton(logo: HTMLElement, label: HTMLElement) {
    const button = document.createElement("button");
    button.style.backgroundColor = this.color;

    button.appendChild(logo);
    button.appendChild(label);

    return button;
  }

  createLogo() {
    const logo = document.createElement("img");
    logo.src = this.logo;
    logo.width = 56;
    logo.height = 56;

    return logo;
  }

  createLabel() {
    const label = document.createElement("span");
    label.textContent = this.label;

    return label;
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

  // HANDLE EVENTS
  handleMouseEvents(button: HTMLElement, scaleEffect: HTMLElement) {
    button.onmouseenter = () => {
      this.isMouseOver = true;
      button.style.zIndex = "2";
      scaleEffect.style.zIndex = "1";

      anime({
        targets: scaleEffect,
        scale: 1200,
        easing: "easeOutElastic(1, 0.5)",
      });
    };

    button.onmouseleave = () => {
      this.isMouseOver = false;
      anime({
        targets: scaleEffect,
        scale: 0,
        easing: "easeInElastic(1, 0.5)",
        complete: () => {
          if (this.isMouseOver === false) {
            scaleEffect.style.zIndex = "initial";
            button.style.zIndex = "initial";
          }
        },
      });
    };
  }
}
