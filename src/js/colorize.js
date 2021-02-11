import colors from './colors';

const bodyRef = document.body;
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

startBtnRef.addEventListener('click', changeBgInInterval);
stopBtnRef.addEventListener('click', stopChangeBg);

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomColor = function (colors, randomIndex) {
  const randomColorIndex = randomIndex(0, colors.length - 1);

  return colors[randomColorIndex];
};

function colorizePage() {
  const randomColor = getRandomColor(colors, randomIntegerFromInterval);

  bodyRef.style.backgroundColor = randomColor;
}

function changeBgInInterval() {
  intervalId = setInterval(colorizePage, 1000);
}

function stopChangeBg() {
  clearInterval(intervalId);
}
