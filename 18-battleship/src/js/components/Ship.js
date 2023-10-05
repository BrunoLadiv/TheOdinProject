export default class Ship {
  constructor(length) {
    this.length = length
    this.hits = Array(length).fill(false) // Initialize hits as an array of 'false' values
  }

  hit(position) {
    if (position >= 0 && position < this.length) {
      this.hits[position] = true
    }
  }

  isSunk() {
    return this.hits.every((hit) => hit === true)
  }
}
