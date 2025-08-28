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

for (let i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener("click", buttonClicked);
}

motdElement.innerHTML = getNewMotd();
hideAllContent();

// functions :33
function buttonClicked(event) {
  let buttonID = event.target.id;
  let targetContentID = buttonID + "Content";
  let activeContent;
  hideAllContent();

  console.log("Button ID: " + buttonID);
  console.log("Target Content ID: " + targetContentID);

  if (activeContent == targetContentID) {
    console.log("Same button pressed");
  }

  // switch (eventTarget) {
  //   case "about":
  //     let aboutContent = document.getElementById("AboutContent");
  //     aboutContent.style.display = "inherit";
  //     activeDiv = aboutContent;
  //     return;
  //   case "links":
  //     let linksContent = document.getElementById("LinksContent");
  //     linksContent.style.display = "inherit";
  //     activeDiv = linksContent;
  //     return;
  // }
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
