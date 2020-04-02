const image = document.createElement("img");
image.src =
  "https://media1.tenor.com/images/3f8b9aec89d8fc5395f3ad3d82f0d697/tenor.gif";
image.style.top = "0";
image.style.position = "absolute";
image.style.width = "100vw";
image.style.height = "100vh";
image.style.zIndex = "999";
window.scrollTo(0, 0);
document.body.style.overflow = "hidden";
document.body.appendChild(image);

setTimeout(() => {
  image.remove();
}, 6500);
