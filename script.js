'use strict';

const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');
const checkButton = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let score = 20;
let highscore = 0;
let randomValue;

function generateRandomNumber() {
  randomValue = Math.trunc(Math.random() * 20 + 1);
}
generateRandomNumber();


againBtn.addEventListener('click', function () {
  message.textContent = 'Start guessing...';
  score = 20;
  scoreDisplay.textContent = score;
  document.querySelector('.number').textContent = '?';
  highscore = 0;
  highscoreDisplay.textContent = highscore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  generateRandomNumber(); 
});

checkButton.addEventListener('click', function () {
  const inputNumber = parseInt(document.querySelector('.guess').value);

  if (!inputNumber) {
    message.textContent = 'No number entered!';
  } else if (inputNumber !== randomValue) {
    message.textContent = inputNumber > randomValue ? 'Number is greater' : 'Number is smaller';
    if (score > 1) {
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = 'You lose the game';
    }
  } else {
    document.querySelector('.number').textContent = randomValue;
    document.querySelector('body').style.backgroundColor = 'green';
    message.textContent = 'Great, you win!';
    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
    }
  }
});

console.log(randomValue);