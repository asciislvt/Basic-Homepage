import './style.css'

const motd = [
  "hello, guy!",
  "good day, guy!",
  "fancy a drink, guy?",
  "stuff and things, guy!",
]

const motdElement = document.getElementById('motd');

if (motdElement) {
  let messageIndex = 0;
  messageIndex = Math.floor(Math.random() * motd.length);
  motdElement.innerHTML = motd[messageIndex];
}
