'use strict';
// const value = document.querySelector('.number').innerHTML;
// const guessNumber = document.querySelector('.number').textContent;
const message = document.querySelector('.message');
const score = document.querySelector('.score').innerHTML;
const highscore = document.querySelector('.highscore').innerHTML;
const checkButton = document.querySelector('.check');
let score2 = 20;
const randomValue = Math.trunc(Math.random() * 20 + 1);
const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function () {
  message.innerHTML = 'Start guessing...';
  document.querySelector('.score').innerHTML = 20;
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.highscore').innerHTML = 0;
  document.querySelector('body').style.backgroundColor = '#222';
});

const score1 = randomValue;
console.log(score1);

checkButton.addEventListener('click', function () {
  const inputNumber = parseInt(document.querySelector('.guess').value);
  if (inputNumber !== score1) {
    message.innerHTML =
      inputNumber > score1 ? 'number is greater' : 'number is smaller';
    if (score2 > 1) {
      score2 = score2 - 1;
      document.querySelector('.score').innerHTML = score2;
    } else {
      message.innerHTML = 'you lose the game';
    }
  }
  //   else if (inputNumber < score1) {
  //     if (score2 > 1) {
  //       score2 = score2 - 1;
  //       document.querySelector('.score').innerHTML = score2;
  //       message.innerHTML = 'number is smaller';
  //     } else {
  //       message.innerHTML = 'you lose the game';
  //     }
  //   }
  else {
    document.querySelector('.number').textContent = randomValue;
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highscore) {
      document.querySelector('.highscore').innerHTML = score;
      message.innerHTML = 'great you win';
    }
  }
});

const btnNew= document.querySelector('.newbtn')
const number=document.querySelector('.number')
btnNew.addEventListener('click',()=> number.innerHTML='hello')
console.log(highscore);
console.log(typeof inputNumber);
