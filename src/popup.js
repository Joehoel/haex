const messages = [
  "Timo wants to hug you",
  "Play with me!",
  "Also try Terraria",
  "Pls kill me"
];
const randomIndex = Math.round(Math.random(messages.length - 1));
document.getElementById("randomMessage").innerHTML = messages[randomIndex];
