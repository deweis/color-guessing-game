/* The variables in use */
let countColors = 6;
let colors = [];
let pickedColor = '';

const container = document.querySelector('#container');
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const title = document.querySelector('#title');
const buttonNewGame = document.querySelector('#btnNewGame');
const buttonEasy = document.querySelector('#btnEasy');
const buttonHard = document.querySelector('#btnHard');
const squares = document.querySelectorAll('.square');

/* Initial Load */
init();

function init() {
  /* Add Event Listeners to the Buttons */
  buttonNewGame.addEventListener('click', newGame);
  buttonEasy.addEventListener('click', () =>
    countColors === 3 ? newGame() : applyMode(3)
  );
  buttonHard.addEventListener('click', () =>
    countColors === 6 ? newGame() : applyMode(6)
  );

  /* Start the Game */
  newGame();
}

/* Start a new Game */
function newGame() {
  colors = generateColors(countColors);
  pickedColor = colors[getRandomBetween(0, countColors)];
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';
  buttonNewGame.textContent = 'Change Color';
  title.style.backgroundColor = '#232323';
  title.style.color = 'white';
  updateSquares();
}

/* Toggle between EASY and HARD Mode */
function applyMode(num) {
  buttonEasy.classList.toggle('btn-active');
  buttonHard.classList.toggle('btn-active');
  countColors = num;

  /* show/hide squares */
  const display = countColors === 3 ? 'none' : 'block';
  for (let i = 3; i < squares.length; i++) {
    squares[i].style.display = display;
  }

  /* restart game*/
  newGame();
}

/* // Add background color and click listener to the squares */
function updateSquares() {
  squares.forEach((square, i) => {
    square.style.backgroundColor = colors[i];
    square.addEventListener('click', () => verifyColor(square));
  });
}

/* Compare color to picked color and adjust backgrounds accordingly */
function verifyColor(square) {
  const clickedColor = square.style.backgroundColor;
  if (clickedColor !== pickedColor) {
    square.style.backgroundColor = '#232323';
    messageDisplay.textContent = 'Try Again';
  } else {
    messageDisplay.textContent = 'Correct!';
    buttonNewGame.textContent = 'Play Again?';
    changeColor(clickedColor);
  }
}

/* Change the colors of the squares and title background */
function changeColor(color) {
  squares.forEach(x => (x.style.backgroundColor = color));
  title.style.backgroundColor = color;
}

/* Generate a random number in a range */
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * max + min);
}

/* Generate an array of x random colors */
function generateColors(num) {
  let arrColors = [];

  for (let i = 0; i < num; i++) {
    arrColors.push(getColor());
  }

  return arrColors;
}

/* Generate one random color */
function getColor() {
  const red = getRandomBetween(0, 256);
  const green = getRandomBetween(0, 256);
  const blue = getRandomBetween(0, 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
