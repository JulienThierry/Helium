// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
const littleCircle = document.createElement("div");
const mediumCircle = document.createElement("div");
const bigCircle = document.createElement("div");
littleCircle.className = "littleCircle";
mediumCircle.className = "mediumCircle";
bigCircle.className = "bigCircle";
document.querySelector("body").appendChild(littleCircle);
document.querySelector("body").appendChild(mediumCircle);
document.querySelector("body").appendChild(bigCircle);

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")
window.addEventListener("mousemove", (e) => {
  littleCircle.style.left = e.pageX + "px";
  littleCircle.style.top = e.pageY + "px";
  mediumCircle.style.left = e.pageX + "px";
  mediumCircle.style.top = e.pageY + "px";
  bigCircle.style.left = e.pageX + "px";
  bigCircle.style.top = e.pageY + "px";
});
// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
