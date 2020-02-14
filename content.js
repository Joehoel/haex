class Timo {
	constructor() {
		this.x = "";
		this.y = "";
	}

	show() {
		const path = chrome.extension.getURL("Animations/timo-slow.gif");
		const img = document.createElement("img");
		img.src = path;
		img.classList.add('timo')
		document.body.appendChild(img);
	}
}

const timo = new Timo();
timo.show();
