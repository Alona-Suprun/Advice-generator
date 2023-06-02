const form = document.getElementById('form');
const spinner = document.getElementById('spinner');
const thankYouMessage = document.getElementById('thankYouMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  spinner.style.display = 'block';

  fetch('https://httpbin.org/post', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      form.reset();
      spinner.style.display = 'none';
      thankYouMessage.style.display = 'block';
    })
    .catch(error => {
      console.error(error);
      spinner.style.display = 'none';
    });
});












