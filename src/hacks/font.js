/*Het hacken kan beginnen*/

//Voeg de font toe aan de pagina
document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Oxanium&display=swap" rel="stylesheet"/>';



//Krijg de huidige font
var currentFont = window.getComputedStyle(document.querySelector('body')).getPropertyValue('font-family');

while(true) {  
  document.body.style.fontFamily = "'Oxanium', cursive";
  sleep(Math.floor((Math.random() * 2700) + 300));
  document.body.style.fontFamily = currentFont;
  sleep(Math.floor((Math.random() * 2700) + 300));
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}