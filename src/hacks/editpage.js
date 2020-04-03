const saveButton = document.createElement("div");
saveButton.id = "saveButton";
saveButton.style.position = "fixed";
saveButton.style.zIndex = "999";
saveButton.style.top = "0";
saveButton.textContent = "Save";
saveButton.style.fontSize = "1.5rem";
saveButton.style.backgroundColor = "#303030";
saveButton.style.color = "white";
saveButton.style.border = "2px solid #03dac6";
saveButton.style.padding = "1rem";
saveButton.style.margin = "1rem";
saveButton.style.borderRadius = "10px";
saveButton.style.boxShadow = "0px 0px 17px 3px rgba(0,0,0,0.75)";
saveButton.style.cursor = "pointer";

const currentFont = window
  .getComputedStyle(document.body)
  .getPropertyValue("font-family");

document.body.contentEditable = "true";
document.designMode = "on";
document.body.appendChild(saveButton);
document.body.style.fontFamily = currentFont;

saveButton.addEventListener("click", () => {
  document.body.contentEditable = "false";
  document.designMode = "off";
  document.body.removeChild(saveButton);
});
