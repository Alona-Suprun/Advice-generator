const URL = 'https://dog.ceo/api/breeds/image/random';
const buttonSuccess = document.getElementById("successButton");
const buttonError = document.getElementById("errorButton");
const buttonReset = document.getElementById("resetButton");
const fotoDiv = document.getElementsByClassName("advice__image")[0];
const defaultImage = 'https://i.dailymail.co.uk/i/newpix/2018/09/03/15/4FAA319100000578-0-image-a-133_1535983826412.jpg';
const explousionImage = 'https://media.tenor.com/ptNG8DQFPD4AAAAj/explotion-explode.gif';
const timerImage = 'https://i.makeagif.com/media/3-09-2017/bPSsed.gif';
const defaultAlt = 'Dog photo';
let errorElement = null;

async function fetchFoto() {
  try {
    const response = await fetch(`${URL}`, { cache: "no-cache" });
    const data = await response.json();
    fotoDiv.src = data.message;
    removeErrorElement();
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

buttonSuccess.addEventListener("click", () => {
  fetchFoto();
});

function onError() {
  const errorMessage = "Fake error occurred, your computer will explode in 5 seconds";
  errorElement = document.createElement("p");
  errorElement.textContent = errorMessage;
  const adviceImgDiv = document.querySelector('.advice__img');
  adviceImgDiv.appendChild(errorElement);
  return errorElement;
}

function removeErrorElement() {
  if (errorElement && errorElement.parentNode) {
    errorElement.parentNode.removeChild(errorElement);
    errorElement = null;
  }
}

function getExplosion() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fotoDiv.src = explousionImage);
    }, 4500);
  });
}

buttonError.addEventListener("click", () => {
  onError();
  fotoDiv.src = timerImage;
  fotoDiv.alt = errorElement.textContent;
  explosion().catch(error => {
    console.error(`An error occurred: ${error.message}`);
  });
});

async function explosion() {
  await getExplosion();
  removeErrorElement();
}

buttonReset.addEventListener("click", () => {
  fotoDiv.src = defaultImage;
  fotoDiv.alt = defaultAlt;
  removeErrorElement();
});