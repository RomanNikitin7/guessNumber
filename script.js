'use strict';

const guessedNumber = document.querySelector('.number');
let guessedNumberValue = Math.trunc(Math.random() * 20 + 1);
guessedNumber.textContent = guessedNumberValue;
const btn = document.querySelector('.btn.check');

const message = document.querySelector('.message');

btn.addEventListener('click', function () {
  const inputField = document.querySelector('.guess');
  const inputFieldValue = inputField.value;

  if (inputFieldValue === '') {
    message.textContent = 'set the number';
  } else if (inputFieldValue > guessedNumberValue) {
    message.textContent = '📈 the current number is greater than guessed';
  } else if (inputFieldValue < guessedNumberValue) {
    message.textContent = '📉 the current number is less than guessed';
  } else if (inputFieldValue === guessedNumberValue) {
    message.textContent = '🎉you win';
  } else if (inputFieldValue === 0) {
    message.textContent = '💥you lose';
  }
});
