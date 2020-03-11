class Timo {
  constructor() {
    // this.ctx = this.createCanvas();
    this.show();
  }

  show() {
    const path = chrome.extension.getURL("Animations/timo-slow.gif");
    const img = document.createElement("img");
    img.src = path;
    img.classList.add("timo");
    document.body.appendChild(img);

    // ! Werkt niet
    // window.onload = () => {
    //   this.ctx.drawImage(img, 100, 100);
    // };
  }

  createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.classList.add("c");

    document.body.appendChild(canvas);
    return canvas.getContext("2d");
  }

  move() {
    // TODO: Laat timo bewegen
  }
}

const timo = new Timo();

// timo.getXY(document.querySelector(".timo"));
