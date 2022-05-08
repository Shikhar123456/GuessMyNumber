let origNumber = Math.trunc(20 * Math.random()) + 1;
// document.querySelector('.number').textContent = origNumber;
console.log(document.querySelector('.number').textContent);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess > origNumber) {
    document.querySelector('.message').textContent = 'Too High';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < origNumber) {
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You Won';
    document.querySelector('.number').textContent = origNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  origNumber = Math.trunc(20 * Math.random()) + 1;
  score = 20;
  document.querySelector('.number').textContent = '??';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
});
