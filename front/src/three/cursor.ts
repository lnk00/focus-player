export default class Cursor {
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;

    window.addEventListener("mousemove", (event) => {
      this.x = event.clientX / window.innerWidth - 0.5;
      this.y = event.clientY / window.innerHeight - 0.5;
    });
  }
}
