const LinkedList = require('./LinkedList')

// Example usage:
const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.prepend(0)
console.log(linkedList.toString()) // Output: (0) -> (1) -> (2) -> (3) -> null
console.log(linkedList.size) // Output: 4
console.log(linkedList.head.value) // Output: 0
console.log(linkedList.tail.value) // Output: 3
console.log(linkedList.at(2).value) // Output: 2
console.log(linkedList.contains(2)) // Output: true
console.log(linkedList.find(2)) // Output: 2
linkedList.pop()
console.log(linkedList.toString()) // Output: (0) -> (1) -> (2) -> null
linkedList.insertAt(4, 2)
console.log(linkedList.toString()) // Output: (0) -> (1) -> (4) -> (2) -> null
linkedList.removeAt(1)
console.log(linkedList.toString()) // Output: (0) -> (4) -> (2) -> null
