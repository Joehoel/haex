/* 
const image = document.createElement("img");
image.src =
  "https://i.imgur.com/kgOK1az.gif";
image.style.top = "0";
image.style.position = "fixed";
image.style.width = "100vw";
image.style.height = "20vh";
image.style.zIndex = "999";
window.scrollTo(0, 0);
document.body.appendChild(image);

setTimeout(() => {
  image.remove();
}, 6500);
*/

var newHTML         = document.createElement ('div');
newHTML.innerHTML   = '<div id="mydiv"><div id="mydivheader"> <img src="https://media.giphy.com/media/oVvhEYvWDvE1G/200.gif"> </div></div>';
document.body.appendChild (newHTML);
var newHTML         = document.createElement ('style');
newHTML.innerHTML   = '#mydiv { position: absolute; z-index: 999;} #mydivheader { cursor: move; z-index: 10;}';
document.body.appendChild (newHTML);

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}