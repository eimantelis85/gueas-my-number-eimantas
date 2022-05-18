'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const btnCheckEl = document.querySelector('.check');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const bodyEl = document.querySelector('body');
const btnAgainEl = document.querySelector('.again');
let score = 20;

btnCheckEl.addEventListener('click', function () {
  if (!guessEl.value) {
    messageEl.textContent = 'No number! Write something you, punk!';
  } else if (guessEl.value < 0) {
    messageEl.textContent = 'Write a possitive number you, punk!';
  } else if (guessEl.value > 20) {
    messageEl.textContent = 'Write numbers between 1-20 you, punk!';
  } else if (guessEl.value < number) {
    messageEl.textContent = 'Higher!';
    score = score - 1;
    scoreEl.textContent = score;
    if (score === 0) {
      messageEl.textContent = 'You lose!';
      bodyEl.style.backgroundColor = '#910';
    }
  } else if (guessEl.value > number) {
    messageEl.textContent = 'Lower!';
    score = score - 1;
    scoreEl.textContent = score;
    if (score === 0) {
      messageEl.textContent = 'You lose!';
      bodyEl.style.backgroundColor = '#910';
    }
  } else {
    messageEl.textContent = 'Correct!';
    numberEl.textContent = number;
    scoreEl.textContent = score;
    bodyEl.style.backgroundColor = '#252';
    if (score > highscoreEl.textContent) {
      highscoreEl.textContent = score;
    }
  }
});

btnAgainEl.addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  bodyEl.style.backgroundColor = '#222';
  score = 20;
  scoreEl.textContent = 20;
  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  guessEl.value = '';
});
