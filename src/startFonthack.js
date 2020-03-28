/*Het hacken kan beginnen*/

//Voeg de font toe aan de pagina
var headHTML = document.getElementsByTagName('head')[0].innerHTML;
headHTML    += '<link href="https://fonts.googleapis.com/css?family=Oxanium&display=swap" rel="stylesheet"/>';
document.getElementsByTagName('head')[0].innerHTML = headHTML;

//Vervang elke div door een gestylde div
const divs = document.querySelectorAll("<div>");
divs.forEach(div => {
  div.src = "<div style='font-family: 'Oxanium', cursive;'";
});


//Moet nog een delay worden ingezet