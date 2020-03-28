const loadHaexBtn = document.getElementById("loadhaex");
const siteName = document.getElementById("siteName");
const optionsBtn = document.querySelector("#go-to-options");
const hacksSelector = document.querySelector("#selectedHacks");

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
}

// Open de options pagina
function openOptions() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL("options.html"));
  }
}

function selectHack(e) {
  selected = e.target.value;

  switch (selected) {
    //! Fixme
    case "fontHack":
      chrome.tabs.executeScript({
        file: "src/startFonthack.js"
      });
      break;

    case "imgHack":
      chrome.tabs.executeScript({
        file: "src/startImghack.js"
      });
      break;

    // TODO: Maken
    // case "loadingBarHack":
    //   chrome.tabs.executeScript({
    //     file: "src/startLoadingBarHack.js"
    //   });
    //   break;

    // case "optie1":
    //   chrome.tabs.executeScript({
    //     file: "src/startOptie1.js"
    //   });
    //   break;

    default:
      break;
  }
}

// Event listeners:

//? Deze misschien niet meer nodig
loadHaexBtn.addEventListener("click", loadingHaex);

optionsBtn.addEventListener("click", openOptions);
hacksSelector.addEventListener("change", selectHack);
