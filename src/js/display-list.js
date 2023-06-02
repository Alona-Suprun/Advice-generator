import data from '../json/list.json';

const listButton = document.getElementById('successListButton');
const noListButton = document.getElementById('errorListButton');
const list = document.getElementsByClassName('qoutes__list')[0];

function displayList(data) {
    list.innerHTML = '';

    data.quotes.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.author}: ${item.phrase}`;
        li.classList.add("qoutes__list-item");
        list.appendChild(li);
    });
}

function displayError() {
    list.innerHTML = '';

    const errorMessages = [
        'Error: Fake error occurred',
        'Try button Display List 😄'
    ];

    errorMessages.forEach(errorMessage => {
        const li = document.createElement('li');
        li.textContent = errorMessage;
        li.classList.add("qoutes__list-item");
        list.appendChild(li);
    });
}

listButton.addEventListener('click', () => {
    displayList(data);
});

noListButton.addEventListener('click', () => {
    displayError();
});