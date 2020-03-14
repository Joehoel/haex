/*Het hacken kan beginnen*/
/*while true {
    setTimeout(function() {
        chrome.tabs.insertCSS({file: "src/styles/newstyle.css"});
        let font = new FontFace("hacked", "url('src/assets/hacked.ttf')");
        document.body.style.fontFamily = 'comic sans ms';}, Math.floor((Math.random() * 5000) + 1));
    
} */


var imgs = document.getElementsByTagName("img");
for(var i=0, l=imgs.length;i<l;i++) {
    imgs[i].src = "https://media.tenor.com/images/7c37724f05ed6d2272d1eaa00d0b06a9/tenor.gif";
}