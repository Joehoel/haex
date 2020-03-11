class Timo {
  constructor() {
    this.path = chrome.extension.getURL("Animations/timo-slow.gif");
    this.img = document.createElement("img");
    this.img.src = this.path;
    this.img.classList.add("timo");

    this.show();
  }

  show() {
    document.body.appendChild(this.img);

    // ! Werkt niet
    // window.onload = () => {
    //   this.ctx.drawImage(img, 100, 100);
    // };
  }

  createContext() {
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
