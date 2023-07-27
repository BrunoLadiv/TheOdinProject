let rounds = 0
let playerScore = 0
let machineScore = 0

function getComputerChoice() {
  const choices = ['✊', '✋', '✌️']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection === computerSelection.toLowerCase()) {
    console.log("It's a tie! Both players chose " + playerSelection + '.')
    return 'tie'
  } else if (
    (playerSelection === '✊' && computerSelection === '✌️') ||
    (playerSelection === '✋' && computerSelection === '✊') ||
    (playerSelection === '✌️' && computerSelection === '✋')
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

function userChoiceFunc(event) {
  let userChoice = event.target.textContent
  console.log(userChoice)
  document.querySelector(".human-pick").innerText = userChoice
  // if (
  //   userChoice !== 'rock' &&
  //   userChoice !== 'paper' &&
  //   userChoice !== 'scissors'
  // ) {
  //   console.log('Invalid choice, choosee between Paper, Rock or Scissors ')
  //   userChoiceFunc()
  // }
  game(userChoice)
}

function game(userChoice) {
  console.log('Rock, Paper, Scissors Game')
  if (playerScore < 5 && machineScore < 5) {
    const userSelection = userChoice
    const computerSelection = getComputerChoice()
    document.querySelector(".machine-pick").innerText = computerSelection
    let result = playRound(userSelection, computerSelection)
    if (result === 'player') {
      playerScore++
      rounds++
    } else if (result === 'machine') {
      machineScore++
      rounds++
    }
    console.log(
      `Current score player ${playerScore} | machine ${machineScore}  `
    )
    document.querySelector('.score-human').innerText = playerScore
    document.querySelector('.score-machine').innerText = machineScore
    
  } else {
    console.log(
      `Game over ${
        playerScore > machineScore ? 'Player won' : 'Machine won'
      } with a score of Player:${playerScore} Machine:${machineScore}`
    )

    playerScore = 0
    machineScore = 0
    document.querySelector('.score-human').innerText = playerScore
    document.querySelector('.score-machine').innerText = machineScore
    
  }

  
  // if (confirm('Play again? ')) {
  //   game()
  // } else {
  //   alert('Goodbye')
  // }
}
