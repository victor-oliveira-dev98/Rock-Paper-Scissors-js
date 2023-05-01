let userWins = 0;
let computerWins = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(userChoice, computerChoice) {
  if (userChoice === 'rock' && computerChoice === 'scissors' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissors' && computerChoice === 'paper') {
    userWins++;
    alert(`You win! ${userChoice} win ${computerChoice}.`);
  } else if (userChoice === computerChoice) {
    alert(`Draw! Both chose ${userChoice}.`);
  } else {
    computerWins++;
    alert(`You Lose! ${computerChoice} win ${userChoice}.`);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const userChoice = prompt('Choose rock, paper or scissors:').toLowerCase();
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
  }

  if (userWins > computerWins) {
    alert(`Congratulations! You won the best of 5 rounds with ${userWins} wins.`);
  } else if (computerWins > userWins) {
    alert(`What a shame! The machine won the best of 5 rounds with ${computerWins} wins.`);
  } else {
    alert('It was a draw! No one has won the best of 5 rounds.');
  }
}

playGame();
