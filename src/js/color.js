const colorButton = document.getElementById("colorButton");
const colorDiv = document.getElementById("colorDiv");

const colors = ["#fdfbef", "#cdccc9", "#9dc6e3", "#e0bdeb", "#f9f4d9"];
let previousColor = "";

function getRandomColor() {
  let randomColor;
  do {
    randomColor = colors[Math.floor(Math.random() * colors.length)];
  } while (randomColor === previousColor);
  previousColor = randomColor;
  return randomColor;
}

function changeColor() {
  const randomColor = getRandomColor();
  colorDiv.style.backgroundColor = randomColor;
}

colorButton.addEventListener("click", changeColor);