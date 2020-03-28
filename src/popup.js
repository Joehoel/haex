const loadHaexBtn = document.getElementById("loadhaex");
const siteName = document.getElementById("siteName");
const optionsBtn = document.querySelector("#go-to-options");
loadHaexBtn.addEventListener("click", loadingHaex);

function cleanUrl(url) {
  let clean = url.split("/")[2];
  if (clean.length > 11) {
    clean = clean.substr(0, 11);
    //Als er al een punt op het laatst in de URL staat hoeven er maar twee punten achteraan
    if (clean.endsWith(".")) {
      clean += "..";
    } else {
      clean += "...";
    }
  }
  return clean;
}

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
  const url = tabs[0].url;
  siteName.innerHTML = cleanUrl(url);
});

//Als er op 'Hack' wordt gedrukt
function loadingHaex() {
  // !Hier moet nog de functie komen van de geselecteerde hacks
  chrome.tabs.executeScript({
    file: "src/startImghack.js"
  });
}

// Open de options pagina
document.querySelector("#go-to-options").addEventListener("click", () => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL("options.html"));
  }
});
