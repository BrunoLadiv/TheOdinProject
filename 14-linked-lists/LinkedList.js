const Node = require('./Node')

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.nextNode = newNode
      this.tail = newNode
    }
    this.size++
  }

  prepend(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.nextNode = this.head
      this.head = newNode
    }
    this.size++
  }

  size() {
    return this.size
  }

  head() {
    return this.head
  }

  tail() {
    return this.tail
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      return null
    }

    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.nextNode
    }

    return current
  }

  pop() {
    if (!this.head) {
      return null
    }

    if (this.size === 1) {
      const poppedNode = this.head
      this.head = null
      this.tail = null
      this.size = 0
      return poppedNode
    }

    let current = this.head
    let previous = null
    while (current.nextNode) {
      previous = current
      current = current.nextNode
    }

    previous.nextNode = null
    this.tail = previous
    this.size--
    return current
  }

  contains(value) {
    let current = this.head
    while (current) {
      if (current.value === value) {
        return true
      }
      current = current.nextNode
    }
    return false
  }

  find(value) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.nextNode
      index++
    }
    return null
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return false
    }

    if (index === 0) {
      this.prepend(value)
    } else if (index === this.size) {
      this.append(value)
    } else {
      const newNode = new Node(value)
      let current = this.head
      let previous = null
      for (let i = 0; i < index; i++) {
        previous = current
        current = current.nextNode
      }
      previous.nextNode = newNode
      newNode.nextNode = current
      this.size++
    }
    return true
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null
    }

    if (index === 0) {
      return this.pop()
    }

    let current = this.head
    let previous = null
    for (let i = 0; i < index; i++) {
      previous = current
      current = current.nextNode
    }
    previous.nextNode = current.nextNode
    if (index === this.size - 1) {
      this.tail = previous
    }
    this.size--
    return current
  }

  toString() {
    let result = ''
    let current = this.head
    while (current) {
      result += `(${current.value}) -> `
      current = current.nextNode
    }
    result += 'null'
    return result
  }
}

module.exports = LinkedList
