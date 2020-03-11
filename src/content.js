replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (containsText(element, "corona")) {
      element.textContent = element.textContent.replace(/corona/gi, "fruit");
    }
    if (containsText(element, "COVID")) {
      element.textContent = element.textContent.replace(
        /COVID\-19/gi,
        "FROVID-21"
      );
    }
  }
}
function containsText(element, text) {
  const regex = new RegExp(text, "gi");
  return element.textContent.match(regex);
}
