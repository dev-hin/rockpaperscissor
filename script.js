let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')

// Generate random selection for computer

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors']

  return choices[Math.floor(Math.random() * choices.length)]
}

// Generate random selection for player

function getPlayerChoice() {
  let choices = ['rock', 'paper', 'scissors']

  return choices[Math.floor(Math.random() * choices.length)]
}

// Determine winner each round and declare result

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = "";
  let score = "";

  if (playerSelection === computerSelection) {
    result = ('It\'s a tie!');
    score = (`Player: ${playerScore}  Computer: ${computerScore}`);
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    ++playerScore;
    result = ('Winner! Rock beats Scissors');
    score = (`Player: ${playerScore}  Computer: ${computerScore}`);
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    ++computerScore;
    result = ('Loser! Paper beats Rock');
    score = (`Player: ${playerScore}  Computer: ${computerScore}`);
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    ++playerScore;
    result = ('Winner! Paper beats rock');
    score = (`Player: ${playerScore}  Computer: ${computerScore}`);
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    ++computerScore;
    result = ('Loser! Scissors beat paper');
    score = (`Player: ${playerScore}  Computer: ${computerScore}`);
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    ++playerScore;
    result = ('Winner! Scissors beat paper');
    score = (`Player: ${playerScore}  Computer: ${computerScore}`);
  } else {
    ++computerScore;
    result = ('Loser! Rock beats scissors');
    score = (`Player: ${playerScore}  Computer: ${computerScore}`);
  }

  document.querySelector('.result').innerHTML = result
  document.querySelector('.score').innerHTML = score

  if (playerScore === 5 || computerScore === 5) {
    declareWinner();
  }

  return
}

function declareWinner() {
  if (playerScore === 5) {
    alert("You are the first to 5 wins! Nice job!")
    playerScore++
  } else if (computerScore === 5) {
    alert("You lost!  The computer got to 5 wins first. :(")
    computerScore++
  }
  playAgain()
  return
}

function playAgain() {
  if (confirm("Play again?")) {
    document.location.reload()
  } else {
    window.close()
  }
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    playRound(button.value)
  })
})