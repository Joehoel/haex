const editingPopup = document.createElement("div");
editingPopup.style.position = "fixed";
editingPopup.style.zIndex = "999";
editingPopup.style.top = "0";
editingPopup.textContent = "Save";
editingPopup.style.fontSize = "1.5rem";
editingPopup.style.backgroundColor = "#303030";
editingPopup.style.color = "white";
editingPopup.style.border = "2px solid #03dac6";
editingPopup.style.padding = "1rem";
editingPopup.style.margin = "1rem";
editingPopup.style.borderRadius = "10px";
editingPopup.style.boxShadow = "0px 0px 17px 3px rgba(0,0,0,0.75)";
editingPopup.style.cursor = "pointer";

const currentFont = window
  .getComputedStyle(document.body)
  .getPropertyValue("font-family");

document.body.contentEditable = "true";
document.designMode = "on";
document.body.appendChild(editingPopup);
document.body.style.fontFamily = currentFont;

editingPopup.addEventListener("click", () => {
  document.body.contentEditable = "false";
  document.designMode = "off";
  editingPopup.remove();
});
