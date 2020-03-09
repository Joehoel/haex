// Werkt niet op alle sites
// Het werkt wel op https://developer.chrome.com/home

class Timo {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.img = document.createElement("img");
    this.canvas.width = this.img.width;
    this.canvas.height = this.img.height;

    this.ctx = this.createCanvas();
    this.path = chrome.extension.getURL("Animations/timo-slow.gif");
    this.img.src = this.path;

    this.show();
  }

  show() {
    // img.classList.add("timo");
    // document.body.appendChild(img);

    window.onload = () => {
      this.ctx.drawImage(this.img, 0, 0);
    };
  }

  createCanvas() {
    this.canvas.classList.add("c");

    document.body.appendChild(this.canvas);
    return this.canvas.getContext("2d");
  }

  move() {
    // TODO: Laat timo bewegen
  }
}

const timo = new Timo();
// timo.getXY(document.querySelector(".timo"));
