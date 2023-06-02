const URL = 'https://api.adviceslip.com/advice';
const adviceId = document.getElementById("adviceTitle");
const adviceText = document.getElementById("adviceTtext");
const button = document.getElementById("colorButton");

async function fetchAdvice() {
  try {
    const response = await fetch(`${URL}`, { cache: "no-cache" });
    const data = await response.json();
    const slip = data.slip;
    const dataId = slip.id;
    const dataAdvice = slip.advice;

    adviceId.innerHTML = `advice # ${dataId}`;
    adviceText.innerHTML = dataAdvice;
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

button.addEventListener("click", () => {
  fetchAdvice();
});