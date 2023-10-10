import hitSoundFile from '../../public/sounds/shot_hit.mp3'
import missSoundFile from '../../public/sounds/shot_miss.mp3'
import fireSoundFile from '../../public/sounds/fire_shot.mp3'

const hitSound = new Audio(hitSoundFile)
const missSound = new Audio(missSoundFile)
const fireSound = new Audio (fireSoundFile)
function playHitSound() {
  hitSound.currentTime = 0
  hitSound.play()
}

function playMissSound() {
  missSound.currentTime = 0
  missSound.play()
}

function PlayFireSound() {
  fireSound.currentTime = 0
  fireSound.play()
}

export { playHitSound, playMissSound, PlayFireSound }
