const loadHaexBtn = document.getElementById("loadhaex");
const siteName = document.getElementById("siteName");

function cleanUrl(url) {
  let clean = url.split("/")[2];
  if (clean.includes("www.")) {
    clean = clean.substr(4);
  }
  return clean;
}

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  const url = tabs[0].url;
  siteName.innerHTML = cleanUrl(url);
});
