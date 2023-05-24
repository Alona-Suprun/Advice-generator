const wordElements = document.getElementsByClassName("rows__row-text");

function fetchWords() {
  const wordPromises = [];

  for (let i = 0; i < wordElements.length; i++) {
    const wordPromise = fetch("https://random-word-form.herokuapp.com/random/noun", { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => {
        let dataWord = data;
        wordElements[i].innerHTML = dataWord;
      });

    wordPromises.push(wordPromise);
  }

  return Promise.all(wordPromises);
}

fetchWords().then();