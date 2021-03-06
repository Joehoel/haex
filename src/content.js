replaceAll(document.body);

function replaceAll(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceAll);
  } else if (element.nodeType === Text.TEXT_NODE) {
    replace(element, "corona", "fruit");
    replace(element, "COVID-19", "FROVID-21");
  } else if (element.tagName == "IMG") {
  }
}

function replace(element, regex, replace) {
  const test = new RegExp(regex, "gi");
  const contains = element.textContent.match(test);
  if (contains) {
    element.textContent = element.textContent.replace(test, replace);
  }
}

// const images = document.querySelectorAll("img");

// const file = "src/assets/yeah.png";
// const url = chrome.runtime.getURL(file);
// images.forEach((image) => {
//   console.log(image.src);
//   image.src = url;
//   console.log(url);
// });
