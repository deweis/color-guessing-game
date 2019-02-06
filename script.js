const countColors = 6;
const colors = generateColors(countColors);
const squares = document.querySelectorAll('.square');
const pickedColor = colors[getRandomBetween(0, countColors)];
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

/* HELPER FUNCTION: Change the colors of the squares and title background */
function changeColor(color) {
  squares.forEach(x => (x.style.backgroundColor = color));
  title.style.backgroundColor = color;
  title.style.color = '#232323';
}

/* HELPER FUNCTION: Create a random number in a range */
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * max + min);
}

/* HELPER FUNCTION: Generate an array of x random colors */
function generateColors(num) {
  let arrColors = [];

  for (let i = 0; i < num; i++) {
    arrColors.push(getColor());
  }
  console.log(arrColors);
  return arrColors;
}

/* HELPER FUNCTION: Generate one random color */
function getColor() {
  const red = getRandomBetween(0, 256);
  const green = getRandomBetween(0, 256);
  const blue = getRandomBetween(0, 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
