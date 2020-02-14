// function myMove() {
//     var elem = img;
// 	var pos = 0;
// 	var id = setInterval(frame, 10);
// 	function frame() {
//         if (pos == 350) {
//             clearInterval(id);
// 		} else {
//             pos++;
// 			elem.style.top = pos + "px";
// 			elem.style.left = pos + "px";
// 		}
// 	}
// }

// myMove();

class Timo {
	constructor() {
        
        this.imgURL = chrome.runtime.getURL("Animations/timo-fast.gif");
		this.img = document.createElement("img");
		this.img.src = this.imgURL;
        this.img.classList.add("timo");
        
        
		this.pos = 0;
        this.elem = this.img;
	}
    
	move() {
        document.body.appendChild(this.img);
		// const id = setInterval(frame, 10);
		function frame() {
			if (this.pos == 350) {
				clearInterval(id);
			} else {
				this.pos++;
				this.elem.style.top = this.pos + "px";
				this.elem.style.left = this.pos + "px";
			}
		}
	}
}

const timo = new Timo();
timo.move();
