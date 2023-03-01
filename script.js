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
  let computerSelection = getComputerChoice()
  let result = ""

  if (playerSelection === computerSelection) {
    result = ('It\'s a tie!')
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    ++playerScore
    result = ('Winner! Rock beats Scissors')
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    ++computerScore
    result = ('Loser! Paper beats Rock')
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    ++playerScore
    result = ('Winner! Paper beats rock')
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    ++computerScore
    result = ('Loser! Scissors beat paper')
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    ++playerScore
    result = ('Winner! Scissors beat paper')
  } else {
    ++computerScore
    result = ('Loser! Rock beats scissors')
  }

  document.querySelector('.result').innerHTML = result
  return
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    playRound(button.value)
  })
})