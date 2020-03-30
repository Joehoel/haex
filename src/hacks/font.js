/*Het hacken kan beginnen*/

//Voeg de font toe aan de pagina
document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Oxanium&display=swap" rel="stylesheet"/>';

//Krijg de huidige font
var currentFont = window.getComputedStyle(document.querySelector('body')).font-family;

//Vervang elke div door een gestylde div
(function myLoop (i) {
  setTimeout(function () {
    alert('hello');
    if (--i) myLoop(i);
  }, 3000)
})(10);

//document.body.style.fontFamily = "'Oxanium', cursive";
//! Deze line is niet nodig vgm
// document.getElementsByTagName("head")[0].innerHTML = headHTML;



//Moet nog een delay worden ingezet

//Nieuwe code:
