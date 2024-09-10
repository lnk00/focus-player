import anime from "animejs/lib/anime.es.js";
import styles from "./style.css?inline";

export default class ConnectButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = styles;

    const logo = this.createLogo();
    const label = this.createLabel();
    const scaleEffect = this.createScaleEffect();
    const button = this.createButton(logo, label);
    const wrapper = this.createWrapper(scaleEffect, button);

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }

  createWrapper(scaleEffect: HTMLElement, button: HTMLElement) {
    const wrapper = document.createElement("div");
    wrapper.id = "wrapper";

    wrapper.onmouseenter = () =>
      anime({
        targets: scaleEffect,
        scale: 2000,
        easing: "easeOutElastic(1, 0.5)",
      });

    wrapper.onmouseleave = () =>
      anime({
        targets: scaleEffect,
        scale: 0,
        easing: "easeInElastic(1, 0.5)",
      });

    wrapper.appendChild(scaleEffect);
    wrapper.appendChild(button);

    return wrapper;
  }

  createScaleEffect() {
    const scaleEffect = document.createElement("div");
    scaleEffect.id = "scale_effect";

    return scaleEffect;
  }

  createButton(logo: HTMLElement, label: HTMLElement) {
    const button = document.createElement("button");

    button.appendChild(logo);
    button.appendChild(label);

    return button;
  }

  createLogo() {
    const logo = document.createElement("img");
    logo.src = "/spotify.svg";
    logo.width = 36;
    logo.height = 36;

    return logo;
  }

  createLabel() {
    const label = document.createElement("span");
    label.textContent = "Spotify";

    return label;
  }
}
