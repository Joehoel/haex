const loadHaexBtn = document.getElementById("loadhaex");
const siteName = document.getElementById("siteName");

function cleanUrl(url) {
  let clean = url.split("/")[2];
  return clean;
}

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  const url = tabs[0].url;
  siteName.innerHTML = cleanUrl(url);
});


function loadingheax() {
  chrome.tabs.executeScript({
    file: 'starthack.js'
  }); 
}

document.getElementById('loadhaex').addEventListener('click', loadingheax);