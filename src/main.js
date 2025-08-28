import "./style.css";

const MOTD = [
  "I am you and you are I.",
  "Touch Grass today!",
  "Does this rag smell like chloroform to you?",
  "Be cool, there's someone behind you...",
  "Cracker Barrel sucks.",
  "Homepage | [hoʊm ˈpædʒeɪ]",
];

let motdElement = document.getElementById("motd");
let buttonElements = document.getElementsByClassName("ContentButton");
let contentElements = document.getElementsByClassName("Content");
let activeContent;

for (let i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener("click", buttonClicked);
}

motdElement.innerHTML = getNewMotd();
hideAllContent();

// functions :33
function buttonClicked(event) {
  let buttonId = event.target.id;
  let targetContentId = buttonId + "Content";
  let targetContent = document.getElementById(targetContentId);
  hideAllContent();

  if (activeContent == targetContentId) {
    console.log("Hiding content");
    targetContent.style.display = "none";
    activeContent = null;
  }
  else {
    targetContent.style.display = "inherit";
    activeContent = targetContentId;
  }
}

function hideAllContent() {
  for (let i = 0; i < contentElements.length; i++) {
    contentElements[i].style.display = "none";
  }
}

function getNewMotd() {
  let messageIndex;

  messageIndex = Math.floor(Math.random() * MOTD.length);
  return MOTD[messageIndex];
}
