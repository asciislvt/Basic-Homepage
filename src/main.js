import "./style.css";

const MOTD = [
  "I am you and you are I.",
  "Touch Grass today!",
  "Does this rag smell like chloroform to you?",
  "Be cool, there's someone behind you...",
];

let motdElement = document.getElementById("motd");
let buttonElements = document.getElementsByClassName("ContentButton");

for (let i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener("click", buttonClicked);
}

if (motdElement) {
  motdElement.innerHTML = getNewMotd();
}

function buttonClicked(event) {
  console.log("A button was clicked!\n" + " Button Clicked:", event.target.id);
}

function getNewMotd() {
  let messageIndex;

  messageIndex = Math.floor(Math.random() * MOTD.length);
  return MOTD[messageIndex];
}
