const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
const textResult = document.querySelector('.result')
const history = document.querySelector('.history')

let operator = ''
let n1 = ''
let n2 = ''
let result = ''
let isEvaluate = false

buttons.forEach((button) => {
  button.addEventListener('click', evaluate)
})
function handleDisplay(text) {
  console.log(result)
  if (result === '' || result === undefined) {
    textResult.innerText = '0'
  } else {
    if (result.toString().length >= 12) {
      textResult.style.fontSize = '30px'
      textResult.innerText = result
    } else {
      textResult.style.fontSize = '50px'
      textResult.innerText = result
    }
  }
  if (text !== 'AC' && text !== 'C' && text !== '=' && text !== undefined) {
    history.innerText += text
  } else if (text === 'C') {
    history.innerText = history.innerText.slice(0, -1)
  }
}
function evaluate(e) {
  if (n1 && n2 && operator) {
    if (
      e.target.innerText === '+' ||
      e.target.innerText === '*' ||
      e.target.innerText === '/' ||
      e.target.innerText === '-' ||
      e.target.innerText === '%'
    ) {
      calc(n1, operator, n2)
    }
  }

  if (e.target.innerText === '=') {
    if (n1 && operator && n2) {
      calc(n1, operator, n2)
      isEvaluate = true
    } else {
      console.log('arguments missing' + n1 + operator + n2)
      return
    }
  } else if (
    e.target.innerText === '+' ||
    e.target.innerText === '*' ||
    e.target.innerText === '/' ||
    e.target.innerText === '-' ||
    e.target.innerText === '%'
  ) {
    operator = e.target.innerText
  } else if (e.target.innerText === 'AC') {
    clearAll()
  } else if (e.target.innerText === 'C') {
    deleteLast()
  } else {
    if (!n1 || !operator) {
      n1 += e.target.innerText
    } else if (n1 && operator) {
      n2 += e.target.innerText
    }
  }

  console.log(
    'N1:' +
      n1 +
      '|  N2: ' +
      n2 +
      '| result ' +
      result +
      '| operator ' +
      operator
  )
  handleDisplay(e.target.innerText, result)
}
function calc(n1, operator, n2) {
  n1 = parseFloat(n1)
  n2 = parseFloat(n2)
  switch (operator) {
    case '%':
      calculateModulus(n1, n2)
      break
    case '+':
      add(n1, n2)
      break
    case '-':
      sub(n1, n2)
      break
    case '*':
      multiply(n1, n2)
      break
    case '/':
      divide(n1, n2)
      break
    default:
      break
  }
}
function divide(a, b) {
  result = a / b
  n1 = result
  n2 = ''
  operator = ''
  // handleDisplay(result)
}

function multiply(a, b) {
  console.log(a + b)
  result = a * b

  n1 = result
  n2 = ''
  operator = ''
}

function calculateModulus(a, b) {
  result = a % b
  n1 = result
  n2 = ''
  operator = ''
}

function sub(a, b) {
  result = a - b
  n1 = result
  n2 = ''
  operator = ''
  // handleDisplay(result)
}

function add(a, b) {
  result = a + b
  n1 = result
  n2 = ''
  operator = ''

  // handleDisplay(result)
}

function clearAll() {
  operator = ''
  n1 = ''
  n2 = ''
  result = ''
  history.innerText = ''
}
function deleteLast() {
  try {
    if (n2) {
      n2 = n2.slice(0, -1)
    } else if (operator) {
      operator = ''
    } else if (n1) {
      console.log(n1)
      n1 = n1.slice(0, -1)
    }
    handleDisplay()
  } catch (error) {
    return
  }
}

handleDisplay()
