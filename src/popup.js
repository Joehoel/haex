const siteName = document.getElementById("siteName");
const optionsBtn = document.querySelector("#go-to-options");

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

function selectHack(e) {
  switch (e.target.name) {
    case "fontHack":
      execute("font");
      setTimeout(() => execute("font"), 6500);

      break;

    case "imgHack":
      execute("image");
      setTimeout(() => execute("image"), 6500);

      break;

    case "options":
      openOptions();

      break;

    case "loadingBarHack":
      execute("loading");
      break;

    case "editPageHack":
      execute("editpage");
      break;

    default:
      break;
  }
}

buttons.forEach(button => {
  button.addEventListener("click", selectHack);
});
