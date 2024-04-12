const heureElement = document.querySelector("#heure");

setInterval(() => {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconde = now.getSeconds();
  const insertion = `Today is day ${day} and the time is ${hours}:${minutes}:${seconde}.`;
  heureElement.textContent = insertion;
}, 1000);
