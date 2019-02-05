const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];

const squares = document.querySelectorAll('.square');
const pickedColor = colors[3];

const colorDisplay = document.querySelector('#colorDisplay');
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
    } else {
      squares.forEach(x => (x.style.backgroundColor = clickedColor));
    }
  });
});
