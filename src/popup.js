const loadHaexBtn = document.getElementById("loadhaex");
const siteName = document.getElementById("siteName");

function cleanUrl(url) {
  let clean = url.split("/")[2];
  if (clean.length > 14) {
    clean = clean.substr(0, 14);
    clean += "...";
  }
  return clean;
}

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
  const url = tabs[0].url;
  siteName.innerHTML = cleanUrl(url);
});

function loadingHaex() {
  chrome.tabs.executeScript({
    file: "src/starthack.js"
  });
}

loadHaexBtn.addEventListener("click", loadingHaex);
