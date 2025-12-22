'use strict';

const guessedNumber = document.querySelector('.number');
const scoreElement = document.querySelector('.score');

let score = 20;
let highScore = 0;
let guessedNumberValue = Math.trunc(Math.random() * 20 + 1);
const btn = document.querySelector('.btn.check');
const inputField = document.querySelector('.guess');
const message = document.querySelector('.message');

const againBtn = document.querySelector('.again');

againBtn.addEventListener('click', function () {
  score = 20;
  scoreElement.textContent = score;
  document.body.style.backgroundColor = '#222';
  guessedNumber.style.width = '15rem';
  guessedNumber.textContent = '?';
  guessedNumberValue = Math.trunc(Math.random() * 20 + 1);
  message.textContent = 'Start guessing...';
  inputField.value = '';
});

btn.addEventListener('click', function () {
  const inputFieldValue = Number(inputField.value);

  if (!inputField.value) {
    message.textContent = 'set the number';
  } else if (
    isNaN(inputFieldValue) ||
    inputFieldValue < 1 ||
    inputFieldValue > 20
  ) {
    message.textContent = '⛔ Number must be between 1 and 20!';
  } else if (inputFieldValue !== guessedNumberValue) {
    if (score > 1) {
      message.textContent =
        inputFieldValue > guessedNumberValue
          ? '📈 the current number is greater than guessed'
          : '📉 the current number is less than guessed';
      score--;
      scoreElement.textContent = score;
    } else {
      scoreElement.textContent = 0;
      message.textContent = '💥 you lost';
    }
  } else if (inputFieldValue === guessedNumberValue) {
    message.textContent = '🎉you win';
    guessedNumber.textContent = guessedNumberValue;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    guessedNumber.textContent = guessedNumberValue;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
