/*Het hacken kan beginnen*/

//Voeg de font toe aan de pagina
// const headHTML = document.getElementsByTagName("head")[0].innerHTML;
document.head.innerHTML +=
  '<link href="https://fonts.googleapis.com/css?family=Oxanium&display=swap" rel="stylesheet"/>';
document.body.style.fontFamily = "'Oxanium', cursive";
//! Deze line is niet nodig vgm
// document.getElementsByTagName("head")[0].innerHTML = headHTML;

//Vervang elke div door een gestylde div
// const divs = document.querySelectorAll("div");
// divs.forEach(div => {
//   div.style.cssText = ;
// });

//Moet nog een delay worden ingezet
