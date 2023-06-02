const URL ='https://random-word-form.herokuapp.com/random/noun';
const wordElements = document.getElementsByClassName("rows__row-text");

async function fetchWords() {
  try {
    const wordPromises = [];

  for (let i = 0; i < wordElements.length; i++) {
    const wordPromise = fetch(`${URL}`, { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => {
        let dataWord = data;
        wordElements[i].innerHTML = dataWord;
      });
    wordPromises.push(wordPromise);
  }
  return Promise.all(wordPromises);
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

fetchWords();