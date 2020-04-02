const loadHaexBtn = document.getElementById("loadhaex");
const siteName = document.getElementById("siteName");
const optionsBtn = document.querySelector("#go-to-options");
const hacksSelector = document.querySelector("#selectedHacks");

const buttons = document.querySelectorAll("button");

function cleanUrl(url) {
  let clean = url.split("/")[2];
  if (clean.length > 22) {
    clean = clean.substr(0, 22);
    //Als er al een punt op het laatst in de URL staat hoeven er maar twee punten achteraan
    if (clean.endsWith(".")) {
      clean += "..";
    } else {
      clean += "...";
    }
  }
  clean = "Hacking " + clean;
  return clean;
}

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
  const url = tabs[0].url;
  siteName.innerHTML = cleanUrl(url);
});

//Als er op 'Hack' wordt gedrukt
function loadingHaex() {
  // TODO: Hier moet nog de functie komen van de geselecteerde hacks
}

// Open de options pagina
function openOptions() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL("options.html"));
  }
}

function execute(hack) {
  return chrome.tabs.executeScript({
    file: `src/hacks/${hack}.js`
  });
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function selectHack(e) {
  switch (e.target.name) {
    case "fontHack":
      // !Werkt niet
      execute("loading");
      setTimeout(() => execute("font"), 6500);

      break;

    case "imgHack":
      // !Werkt niet
      execute("loading");
      setTimeout(() => execute("image"), 6500);

      break;

    case "options":
      openOptions();

      break;

    // TODO: Maken
    case "loadingBarHack":
      execute("loading");
      break;

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
// loadHaexBtn.addEventListener("click", loadingHaex);

// optionsBtn.addEventListener("click", openOptions);
// hacksSelector.addEventListener("change", selectHack);

buttons.forEach(button => {
  button.addEventListener("click", selectHack);
});
