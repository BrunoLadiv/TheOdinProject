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

function caesarCipher(str, shift) {
  return str
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('')
}

function shiftChar(char, shift) {
  if (/[a-zA-Z]/.test(char)) {
    const isUpperCase = char === char.toUpperCase()
    const startCode = isUpperCase ? 65 : 97
    const shiftedCharCode =
      ((((char.charCodeAt(0) - startCode + shift) % 26) + 26) % 26) + startCode
    return String.fromCharCode(shiftedCharCode)
  }
  return char
}

export { capitalize, reverseString, calculator, caesarCipher }
