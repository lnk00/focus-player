import "./style.css";
import anime from "animejs/lib/anime.es.js";

document
  .querySelector(".connect_btn_wrapper")
  ?.addEventListener("mouseenter", () => {
    anime({
      targets: ".connect_btn_transition",
      scale: 2000,
      easing: "easeOutElastic(1, 0.5)",
    });
  });

document
  .querySelector(".connect_btn_wrapper")
  ?.addEventListener("mouseleave", () => {
    anime({
      targets: ".connect_btn_transition",
      scale: 0,
      easing: "easeInElastic(1, 0.5)",
    });
  });
