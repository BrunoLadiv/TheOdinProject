function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection === computerSelection.toLowerCase()) {
    console.log("It's a tie! Both players chose " + playerSelection + '.')
    return 'tie'
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(
      'You Win! ' + playerSelection + ' beats ' + computerSelection + '.'
    )
    return 'player'
  } else {
    console.log(
      'You Lose! ' + computerSelection + ' beats ' + playerSelection + '.'
    )
    return 'machine'
  }
}

// const playerSelection = 'rock'
// console.log(playRound(playerSelection, computerSelection))

function userChoiceFunc() {
  let userChoice = prompt('Type your choice: ').toLowerCase()
  console.log(userChoice)
  if (
    userChoice !== 'rock' &&
    userChoice !== 'paper' &&
    userChoice !== 'scissors'
  ) {
    console.log('Invalid choice, choosee between Paper, Rock or Scissors ')
    userChoiceFunc()
  }
  return userChoice
}

function game() {
  let rounds = 0
  let playerScore = 0
  let machineScore = 0
  console.log('Rock, Paper, Scissors Game')
  while (rounds < 5) {
    const userSelection = userChoiceFunc()
    const computerSelection = getComputerChoice()
    let result = playRound(userSelection, computerSelection)
    if (result === 'player') {
      playerScore++
    } else if (result === 'machine') {
      machineScore++
    }
    console.log(
      `Current score player ${playerScore} | machine ${machineScore}  `
    )
    rounds++
  }
  console.log(
    `Game over ${
      playerScore > machineScore ? 'Player won' : 'Machine won'
    } with a score of Player:${playerScore} Machine:${machineScore}`
  )
  if (confirm('Play again? ')) {
    game()
  }
  else {
    alert("Goodbye")
  }
}

game()
