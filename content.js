const img = document.createElement('img')
const imgURL = chrome.runtime.getURL("animations/timo-fast.gif");
img.src = imgURL
document.body.appendChild(img)

var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);