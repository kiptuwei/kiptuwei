'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let gameOver = 'Game Over!!';
let start = 'Start guessing...';
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

const displayScore = function(score){
  document.querySelector('.score').textContent = score;
} 

console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage('⛔ No number');
  } //when number not in [1,...,20]
  else if (guess > 20 || guess < 1) {
    displayMessage('Number should be between 1 and 20');
  } //when number correct
  else if (guess === secretNumber) {
    displayMessage( '🎉 Correct Number')

    //secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //score = Number(document.querySelector('.score').textContent);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? '📉 Try a lower number'
      //     : '📈 Try a higher number';

      displayMessage(guess > secretNumber
        ? '📉 Try a lower number'
        : '📈 Try a higher number');
      score--;
      displayScore(score);
    } else {
      displayMessage(gameOver);
      document.querySelector('.score').textContent =
        guess > secretNumber ? score : 0;
    }
   } //when number is greater
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Try a lower number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     //document.querySelector('body').style.backgroundColor = '#222';
  //     //document.querySelector('.number').style.width = '15rem';
  //   } else {
  //     document.querySelector('.message').textContent = gameOver;
  //     document.querySelector('.score').textContent = score;
  //     //document.querySelector('body').style.backgroundColor = '#222';
  //     //document.querySelector('.number').style.width = '15rem';
  //   }
  // } //when number is lesser
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Try a higher number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     //document.querySelector('body').style.backgroundColor = '#222';
  //     //document.querySelector('.number').style.width = '15rem';
  //   } else {
  //     document.querySelector('.message').textContent = gameOver;
  //     document.querySelector('.score').textContent = 0;
  //     //document.querySelector('body').style.backgroundColor = '#222';
  //     //document.querySelector('.number').style.width = '15rem';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);

  displayMessage(start) ;
  displayScore(score);
  //if (score > highScore) highScore = score;
  //document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
});
