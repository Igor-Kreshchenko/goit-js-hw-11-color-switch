import colors from './colors';

const bodyRef = document.body;
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

startBtnRef.addEventListener('click', changeBgInInterval);
stopBtnRef.addEventListener('click', stopChangeBg);

const INTERVAL_DELAY = 1000;
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomColor() {
  const randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);

  return colors[randomColorIndex];
}

function setPageBg() {
  bodyRef.style.backgroundColor = getRandomColor();
}

function changeBgInInterval() {
  intervalId = setInterval(setPageBg, INTERVAL_DELAY);
  startBtnRef.disabled = true;
}

function stopChangeBg() {
  clearInterval(intervalId);
  startBtnRef.disabled = false;
}
