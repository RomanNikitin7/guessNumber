'use strict';

const guessedNumber = document.querySelector('.number');
const scoreElement = document.querySelector('.score');

let score = 20;
let guessedNumberValue = Math.trunc(Math.random() * 20 + 1);
guessedNumber.textContent = guessedNumberValue;
const btn = document.querySelector('.btn.check');

const message = document.querySelector('.message');


btn.addEventListener('click', function () {
  const inputField = document.querySelector('.guess');
  const inputFieldValue = Number(inputField.value);

  if (!inputField.value) {
    message.textContent = 'set the number';
  } else if (isNaN(inputFieldValue) || inputFieldValue < 1 || inputFieldValue > 20) {
    message.textContent = '⛔ Number must be between 1 and 20!';
  } else if (inputFieldValue > guessedNumberValue) {
    if (score > 1) {
    message.textContent = '📈 the current number is greater than guessed';
      score--;
      scoreElement.textContent = score;
    } else {
      scoreElement.textContent = 0;
      message.textContent = '💥 you lost';
    }
  } else if (inputFieldValue < guessedNumberValue) {
    if (score > 1) {
      message.textContent = '📉 the current number is less than guessed';
      score--;
      scoreElement.textContent = score;
    } else {
      scoreElement.textContent = 0;
      message.textContent = '💥 you lost';
    }
  } else if (inputFieldValue === guessedNumberValue) {
    message.textContent = '🎉you win';
    guessedNumber.textContent = guessedNumberValue;
  }
});
