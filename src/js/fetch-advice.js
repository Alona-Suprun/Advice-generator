const adviceId = document.getElementById("adviceTitle");
const adviceText = document.getElementById("adviceTtext");
const button = document.getElementById("colorButton");

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;

      adviceId.innerHTML = `advice # ${dataId}`;
      adviceText.innerHTML = dataAdvice;
    });
}

button.addEventListener("click", () => {
  fetchAdvice();
});