const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];

const squares = document.querySelectorAll('.square');
squares.forEach((x, i) => (x.style.backgroundColor = colors[i]));

const pickedColor = colors[3];

const colorDisplay = document.querySelector('#colorDisplay');
colorDisplay.textContent = pickedColor;
