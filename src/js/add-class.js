const gridItems = document.querySelectorAll('.grid__item');

for (let i = 0; i < gridItems.length; i++) {
  const gridItem = gridItems[i];

  if ((i + 1) % 3 === 0) {
    gridItem.classList.add('grid__item--plus');
  }

  if ((i + 1) % 4 === 0) {
    gridItem.classList.add('grid__item--minus');
  }
}