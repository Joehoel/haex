// Werkt niet op alle sites
// Het werkt wel op https://developer.chrome.com/home
import GIF from "./gif";

class Timo {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.img = document.createElement("img");
    this.path = chrome.extension.getURL("Animations/timo-slow.gif");
    this.img.src = this.path;
    this.canvas.width = this.img.width;
    this.canvas.height = this.img.height;

    this.ctx = this.createContext();

    this.x = this.canvas.width;
    this.y = 0;

    this.draw();
    // this.move();
  }

  draw() {
    window.onload = () => {
      this.ctx.drawImage(this.img, 0, 0);
      // requestAnimationFrame(this.move);
    };
  }

  createContext() {
    this.canvas.classList.add("c");

    document.body.appendChild(this.canvas);
    return this.canvas.getContext("2d");
  }

  move() {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear canvas
    // this.ctx.drawImage(this.img, this.x, this.y); // draw image at current position
    // this.x -= 4;
    // if (this.x > 250) requestAnimationFrame(this.move); // loop
  }
}

const timo = new Timo();
