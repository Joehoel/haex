const loadTimoBtn = document.getElementById("loadtimo");
const randomMessageEl = document.getElementById("randomMessage");

const messages = [
  "Timo wants to hug you",
  "Play with me!",
  "Also try Terraria",
  "Pls kill me"
];

function randomMessage(messages) {
  return messages[Math.floor(Math.random() * messages.length)];
}

loadTimoBtn.addEventListener("click", () => {
  randomMessageEl.textContent = "";
  randomMessageEl.textContent = randomMessage(messages);
});
