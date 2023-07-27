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
    document.querySelector('.tie').style.visibility = 'visible'
    setTimeout(() => {
      document.querySelector('.tie').style.visibility = 'hidden'
    }, 1000)
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
  let userChoice = event.target.textContent.trim()

  console.log(userChoice)
  document.querySelector('.human-pick').innerText = userChoice
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
    document.querySelector('.machine-pick').innerText = computerSelection
    let result = playRound(userSelection, computerSelection)
    if (result === 'player') {
      document.querySelector('.cd-player').classList.add('blink-border')
      document.querySelector('.h-win').style.visibility = 'visible'
      setTimeout(() => {
        document.querySelector('.h-win').style.visibility = 'hidden'
        document.querySelector('.cd-player').classList.remove('blink-border')
      }, 1000)
      playerScore++
      rounds++
    } else if (result === 'machine') {
      document.querySelector('.cd-machine').classList.add('blink-border')
      document.querySelector('.m-win').style.visibility = 'visible'
      setTimeout(() => {
        document.querySelector('.m-win').style.visibility = 'hidden'
        document.querySelector('.cd-machine').classList.remove('blink-border')
      }, 1000)
      machineScore++
      rounds++
    }
    console.log(
      `Current score player ${playerScore} | machine ${machineScore}  `
    )
    document.querySelector('.score-human').innerText = playerScore
    document.querySelector('.score-machine').innerText = machineScore
    if (playerScore === 5 || machineScore === 5) {
      console.log(
        `Game over ${
          playerScore > machineScore ? 'Player won' : 'Machine won'
        } with a score of Player:${playerScore} Machine:${machineScore}`
      )

      document.querySelector('.game-winner').innerText = ` ${
        playerScore > machineScore ? 'Player won' : 'Machine won'
        } with a score of Player:${playerScore} Machine:${machineScore}`
      
        document.querySelector('.game-winner').style.color = `${playerScore < machineScore ? 'red':'greenyellow'} `

      showPopup()
    }
  }
}
// popupstuff
function showPopup() {
  const popup = document.getElementById('popup')
  popup.style.display = 'block'
}

function hidePopup() {
  const popup = document.getElementById('popup')
  popup.style.display = 'none'
  playerScore = 0
  machineScore = 0

  document.querySelector('.score-human').innerText = playerScore
  document.querySelector('.score-machine').innerText = machineScore
  
}

// document.getElementById("showPopupBtn").addEventListener("click", showPopup);
