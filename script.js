const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];

const squares = document.querySelectorAll('.square');
const pickedColor = colors[getRandomBetween(0, 6)];
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const title = document.querySelector('#title');

colorDisplay.textContent = pickedColor;

squares.forEach((square, i) => {
  // Add background color to the squares
  square.style.backgroundColor = colors[i];

  // Add click listener to the squares
  square.addEventListener('click', () => {
    // Grab color of clicked square
    const clickedColor = square.style.backgroundColor;

    // Compare color to picked color and adjust backgrounds accordingly
    if (clickedColor !== pickedColor) {
      square.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    } else {
      messageDisplay.textContent = 'Correct!';
      changeColor(clickedColor);
    }
  });
});

function changeColor(color) {
  squares.forEach(x => (x.style.backgroundColor = color));
  title.style.backgroundColor = color;
  title.style.color = '#232323';
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
