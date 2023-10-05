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

function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input is not an array');
  }

  if (arr.length === 0) {
    return {
      average: NaN,
      min: undefined,
      max: undefined,
      length: 0,
    };
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }
