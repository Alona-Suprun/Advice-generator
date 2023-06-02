import { purpleQuotes, appendQuotes } from './data.js';

appendQuotes(purpleQuotes, 'purple-list');

const purpleDiv = document.getElementById('purple');
purpleDiv.addEventListener('mouseenter', () => {
  document.getElementById('purple-list').style.display = 'block';
});
purpleDiv.addEventListener('mouseleave', () => {
  document.getElementById('purple-list').style.display = 'none';
});