import { blueQuotes, appendQuotes } from './data.js';

appendQuotes(blueQuotes, 'blue-list');

const blueDiv = document.getElementById('blue');
blueDiv.addEventListener('mouseenter', () => {
  document.getElementById('blue-list').style.display = 'block';
});
blueDiv.addEventListener('mouseleave', () => {
  document.getElementById('blue-list').style.display = 'none';
});