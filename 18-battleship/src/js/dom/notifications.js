const playerMSGBubble = document.querySelector('.player-speech-bubble .message')
const cpuMSGBubble = document.querySelector('.cpu-speech-bubble .message')
const playerMSGBubbleCTN = document.querySelector('.player-speech-bubble')
const cpuMSGBubbleCTN = document.querySelector('.cpu-speech-bubble')
let gameover
const cpuHitMessages = [
  'That was a direct hit!',
  "We've damaged their hull!",
  "Avast ye scallywag! We've hit 'em where it hurts!",
  'Arrr, that be a solid hit on their ship, matey!',
  'Aye, aye! That be a fine shot',
  "We've hit 'em where it hurts!",
  "Their ship's takin' a proper beatin', matey!",
]

const playerHitMessages = [
  'We go them, direct hit',
  'Feel like giving up yet?',
  "Well aimed, me hearties! We've found their mark!",
  "No escape for 'em now, we've got 'em pinned!",
  "Ye be dancin' with Davy Jones now, ye filthy pirates!",
  'Ye thought ye could outwit the Royal Navy? Ha!',
  'Surrender now, or prepare to be sent to the depths!',
]

const playerMissedHits = [
  "Ye be aimin' like a blindfolded landlubber!",
  'Arrr, ye missed us by a country league!',
  'Shiver me timbers! We be too quick for ye!',
  "Ye can't hit the broadside of a barn, ye scurvy dog!",
  "Har har har! Ye be shootin' wide, matey!",
  'A swing and a miss! Ye need more practice, ye lubber!',
  "Ye be shootin' blanks, just like yer cannons!",
  "Arrr, ye couldn't hit the broadside of a ship!",
  "We be laughin' at yer feeble attempts, ye sea slug!",
  "Keep tryin', ye scallywag! Ye won't hit the mark!",
]

const cpuMissedHits = [
  'Arrr, ye be as blind as a one-eyed parrot!',
  'Ye missed by a mile, matey! Aim better next time!',
  'Har har har! That shot be wilder than a stormy sea!',
  "Yarrr, ye couldn't hit the side of a ship if ye tried!",
  'Aye aye, captain! Ye need to sharpen yer aim!',
  "Keep practicin', matey! Ye won't hit nothin' that way!",
  "Ye be shootin' like a landlubber on his first voyage!",
  "Hoist the Jolly Roger! Yer aim be as crooked as a pirate's heart!",
  'That shot be as wayward as a ship lost in a fog!',
]
const preGameMessages = [
  'Prepare for battle! Drag and drop our ships onto the board.',
  'Ready to set sail? Place our ships on the board by dragging and dropping.',
  'To begin, drag and drop our fleet of ships onto the battlefield.',
  'Time to strategize! Place our ships on the board using drag and drop.',
  "It's time to deploy our fleet! Drag and drop our ships onto the battlefield.",
]
const gameOverMessages = [
  'Victory is yours!',
  'Congratulations on the win!',
  "You've emerged victorious!",
  'Well done on your triumph!',
  "You've achieved victory!",
]

function hitMSG(player) {
  // Randomly select a hit message

  const hitMessages = player === 'cpu' ? cpuHitMessages : playerHitMessages
  const randomIndex = Math.floor(Math.random() * hitMessages.length)
  const message = hitMessages[randomIndex]

  if (player === 'player') {
    playerMSGBubble.innerText = message
    cpuMSGBubble.innerText = "..."
  } else {
    cpuMSGBubble.innerText = message
    playerMSGBubble.innerText = '...'
  }
}

function missMSG(player) {
  // Randomly select a hit message
  const hitMessages = player === 'cpu' ? cpuMissedHits : playerMissedHits
  const randomIndex = Math.floor(Math.random() * hitMessages.length)
  const message = hitMessages[randomIndex]
  if (player === 'player') {
    cpuMSGBubble.innerText = message
    playerMSGBubble.innerText = '...'
  } else if (player === 'cpu') {
    playerMSGBubble.innerText = message
    cpuMSGBubble.innerText = '...'
  }
}

function preGameNotification() {
  const playerBoard = document.querySelector("body > div.game-container > div.player-board > div")
  const fleetContainer = document.querySelector("body > div.game-container > div.fleet-container")
  playerBoard.classList.add('pre-game')
  fleetContainer.classList.add('pre-game')
  
  const randomIndex = Math.floor(Math.random() * preGameMessages.length)
  const message = preGameMessages[randomIndex]

  playerMSGBubble.innerText = message
  setTimeout(() => {
    playerBoard.classList.remove('pre-game')
    fleetContainer.classList.remove('pre-game')
  }, 4000);
}

function gameOverMSG(player) {
  const randomIndex = Math.floor(Math.random() * gameOverMessages.length)
  const message = gameOverMessages[randomIndex]
  if (player === 'player') {
    cpuMSGBubble.innerText = message + ' I surrender!'
    playerMSGBubble.innerText = 'Hahahahaha'
    setTimeout(() => {
      location.reload()
    }, 5000);
  } else {
    playerMSGBubble.innerText = message + ' I surrender!'
    cpuMSGBubble.innerText = 'Hahahahaha'
    setTimeout(() => {
      location.reload()
    }, 5000);
  }
}

function playerDialog(player, msg) {
  if (gameover) return
  let bubbleContainer
  if (player === 'player') {
    if (msg === 'hit') {
      bubbleContainer = playerMSGBubbleCTN

      bubbleContainer.style.opacity = '1'

      hitMSG(player)
    } else if (msg === 'miss') {
      bubbleContainer = cpuMSGBubbleCTN

      bubbleContainer.style.opacity = '1'

      missMSG(player)
    } else if (msg === 'pregame') {
      bubbleContainer = playerMSGBubbleCTN
      bubbleContainer.style.opacity = '1'
      preGameNotification()
    } else if (msg === 'gameover') {
      gameover = true
      gameOverMSG(player)
      return
    }
  } else if (player === 'cpu') {
    if (msg === 'hit') {
      bubbleContainer = cpuMSGBubbleCTN

      bubbleContainer.style.opacity = '1'

      hitMSG(player)
    } else if (msg === 'miss') {
      bubbleContainer = playerMSGBubbleCTN

      bubbleContainer.style.opacity = '1'

      missMSG(player)
    } else if (msg === 'gameover') {
      gameover = true
      gameOverMSG(player)
      return
    }
  }
}

export { playerDialog }
