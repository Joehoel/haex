/*Het hacken kan beginnen*/
/*while true {
    setTimeout(function() {
        chrome.tabs.insertCSS({file: "src/styles/newstyle.css"});
        let font = new FontFace("hacked", "url('src/assets/hacked.ttf')");
        document.body.style.fontFamily = 'comic sans ms';}, Math.floor((Math.random() * 5000) + 1));
    
} */

// for(var i=0, l=images.length;i<l;i++) {
//     /*In plaats van de URL werkt de volgende code niet: chrome.extension.getURL('src/assets/matrix2.gif')*/
// }

const images = document.querySelectorAll("img");

images.forEach(image => {
  image.src =
    "https://media.tenor.com/images/7c37724f05ed6d2272d1eaa00d0b06a9/tenor.gif";
});
