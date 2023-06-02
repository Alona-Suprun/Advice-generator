const purpleQuotes = [
    "Take the risk or lose the chance.",
    "You can totally do this.",
    "Impossible is for the unwilling. John Keats"
];

const blueQuotes = [
    "I can and I will.",
    "If you want it, work for it.",
    "Try again. Fail again. Fail better. Samuel Beckett"
];

function appendQuotes(quotes, listId) {
    const quoteList = document.getElementById(listId);

    quotes.forEach((quote) => {
      const listItem = document.createElement('li');
      listItem.textContent = quote;
      quoteList.appendChild(listItem);
    });
}

export { purpleQuotes, blueQuotes, appendQuotes };