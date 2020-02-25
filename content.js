class Timo {
	constructor() {
		this.ctx = this.createCanvas()
	}

	show() {
		const path = chrome.extension.getURL("Animations/timo-slow.gif");
		const img = document.createElement('img')
		img.src = path;
		// img.classList.add("timo");
		// document.body.appendChild(img);

		window.onload = () => {
			this.ctx.drawImage(img, 100, 100);
		}
	}
	
	createCanvas() {
		const canvas = document.createElement("canvas");
		canvas.classList.add("c");
	
		document.body.appendChild(canvas);
		return canvas.getContext("2d");
	}

	// getXY(element) {
	// 	const rect = element.getBoundingClientRect();
	// 	console.log("X: " + rect.x + ", " + "Y: " + rect.y);
	// }

	move() { }
}

const timo = new Timo();
timo.show();
// timo.getXY(document.querySelector(".timo"));
