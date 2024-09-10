import "./style.css";
import anime from "animejs/lib/anime.es.js";

class ConnectButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const logo = this.createLogo();
    const label = this.createLabel();
    const scaleEffect = this.createScaleEffect();
    const button = this.createButton(logo, label);
    const wrapper = this.createWrapper(scaleEffect, button);

    shadow.appendChild(wrapper);
  }

  createWrapper(scaleEffect: HTMLElement, button: HTMLElement) {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";

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
    scaleEffect.style.position = "absolute";
    scaleEffect.style.backgroundColor = "#1ed05e";
    scaleEffect.style.zIndex = "-1";
    scaleEffect.style.borderRadius = "100%";
    scaleEffect.style.height = "1px";
    scaleEffect.style.width = "1px";
    scaleEffect.style.top = "50%";
    scaleEffect.style.left = "50%";
    scaleEffect.style.transform = "translate(-50%, -50%)";

    return scaleEffect;
  }

  createButton(logo: HTMLElement, label: HTMLElement) {
    const button = document.createElement("button");
    button.style.backgroundColor = "transparent";
    button.style.border = "2px solid rgba(255, 255, 255, 0.1)";
    button.style.borderRadius = "6px";
    button.style.height = "96px";
    button.style.width = "96px";
    button.style.cursor = "pointer";
    button.style.fontSize = "18px";
    button.style.display = "flex";
    button.style.flexDirection = "column";
    button.style.alignItems = "center";
    button.style.justifyContent = "center";
    button.style.gap = "8px";
    button.style.fontFamily = "Bebas Neue";
    button.style.transition = "all";
    button.style.transitionDuration = "1s";

    button.onmouseover = () => {
      button.style.border = "2px solid rgba(255, 255, 255, 0.8)";
    };

    button.onmouseout = () => {
      button.style.border = "2px solid rgba(255, 255, 255, 0.1)";
    };

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

customElements.define("connect-button", ConnectButton);
