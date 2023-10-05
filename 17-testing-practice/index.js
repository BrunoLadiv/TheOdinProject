function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function reverseString(str) {
  return str.split('').reverse().join('')
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => (b === 0 ? 'Cannot divide by zero' : a / b),
  multiply: (a, b) => a * b,
}

export { capitalize, reverseString, calculator }
