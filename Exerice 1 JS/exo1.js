const citations = [
  "On peut connaître la vertu d’un homme en observant ses défauts.",
  "La vie est vraiment simple, mais nous insistons pour la rendre compliquée.",
  "Agis avec gentillesse, mais n'attends pas de la reconnaissance.",
];

const bouton = document.querySelector("button");
const citationElement = document.querySelector(".citation");

bouton.addEventListener("click", function () {
  const citation = citations[Math.floor(Math.random() * citations.length)];
  citationElement.textContent = citation;
});
