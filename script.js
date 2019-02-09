const container = document.querySelector('#container');
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const title = document.querySelector('#title');
const buttonNewGame = document.querySelector('#btnNewGame');
const buttonEasy = document.querySelector('#btnEasy');
const buttonHard = document.querySelector('#btnHard');
let squares = document.querySelectorAll('.square');
let countColors = 6;
let colors = generateColors(countColors);
let pickedColor = colors[getRandomBetween(0, countColors)];

buttonNewGame.addEventListener('click', newGame);
buttonEasy.addEventListener('click', () => changeMode('easy'));
buttonHard.addEventListener('click', () => changeMode('hard'));

newGame();

/* Start a new Game */
function newGame() {
  console.log(countColors);
  colors = generateColors(countColors);
  pickedColor = colors[getRandomBetween(0, countColors)];
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';
  buttonNewGame.textContent = 'Change Color';
  title.style.backgroundColor = '#232323';
  title.style.color = 'white';
  updateSquares();
}

/* HELPER FUNCTION: Toggle between EASY and HARD Mode */
function changeMode(mode) {
  if (
    (mode === 'hard' && countColors === 6) ||
    (mode === 'easy' && countColors === 3)
  ) {
    return;
  } else if (mode === 'hard' && countColors === 3) {
    applyMode(6);
  } else if (mode === 'easy' && countColors === 6) {
    applyMode(3);
  }
}

/* HELPER FUNCTION: Toggle Easy/Hard button */
function applyMode(num) {
  buttonEasy.classList.toggle('btn-active');
  buttonHard.classList.toggle('btn-active');
  countColors = num;
  setSquares(countColors);
  newGame();
}

/* HELPER FUNCTION: Set squares based on play mode, I.e. count colors */
function setSquares(num) {
  container.innerHTML = '';

  for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    container.appendChild(div);
  }

  squares = document.querySelectorAll('.square');
}

/* HELPER FUNCTION: Update the squares accordingly with colors */
function updateSquares() {
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
        buttonNewGame.textContent = 'New Game?';
        changeColor(clickedColor);
      }
    });
  });
}

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
