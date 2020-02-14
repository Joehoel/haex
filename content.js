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
		const img = document.createElement("img");
		img.src = path;
		img.classList.add("timo");
		document.body.appendChild(img);
	}

	getXY(element) {
		const rect = element.getBoundingClientRect();
		console.log("X: " + rect.x + ", " + "Y: " + rect.y);
	}

	move() {}
}

const timo = new Timo();
timo.show();
timo.getXY(document.querySelector('.timo'))
