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
