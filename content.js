//================================//
// Dit is de "timo" class, als je //
// nu google.com laad zie je hem  //
// als het goed is op het scherm  //
//================================//
class Timo {
	constructor() {
		this.x = "";
		this.y = "";
	}

	show() {
		const path = chrome.extension.getURL("Animations/timo-slow.gif");
		const img = new Image()
		img.src = path;
		// img.classList.add("timo");
		// document.body.appendChild(img);
		
		const canvas = document.createElement("canvas");
		canvas.classList.add("c");
		document.body.appendChild(canvas);
		const ctx = canvas.getContext("2d");
		img.onload = ctx.drawImage(img, 0, 0);
		
	}

	getXY(element) {
		const rect = element.getBoundingClientRect();
		console.log("X: " + rect.x + ", " + "Y: " + rect.y);
	}

	move() {}
}

const timo = new Timo();
timo.show();
timo.getXY(document.querySelector(".timo"));
