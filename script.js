'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Enter a number');
  }

  //when player wins
  else if (guess == secretNumber) {
    displayMessage('Hurrah!, Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }

  //   //guess high
    else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too high';
        score = score - 1;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You Lose';
      }
    }

  //   //guess low
    else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too low';
        score = score - 1;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You Lose';
      }
    }

  //when guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

