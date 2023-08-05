const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
const textResult = document.querySelector('.result')
const history = document.querySelector('.history')

let operator = ''
let n1 = ''
let n2 = ''
let result = ''

buttons.forEach((button) => {
  button.addEventListener('click', evaluate)
})
function handleDisplay(text) {
  console.log(result)
  if (result === '' || result === undefined) {
    textResult.innerText = '0'
  } else {
    textResult.innerText = result
  }
  if (text !== 'AC' && text !== 'C' && text !== '=' && text !== undefined) {
    history.innerText += text
  }
}
function evaluate(e) {
  if (
    e.target.innerText === '+' ||
    e.target.innerText === '*' ||
    e.target.innerText === '/' ||
    e.target.innerText === '-'
  ) {
    operator = e.target.innerText
  } else if (e.target.innerText === 'AC') {
    clearAll()
  } else if (e.target.innerText === 'C') {
    // call delete last func
  } else if (e.target.innerText === '=') {
    if (n1 && operator && n2) {
      calc(n1, operator, n2)
    } else {
      console.log('arguments missing' + n1 + operator + n2)
    }
    // call calc function
  } else if (e.target.innerText === '.') {
    // idk what do here xd
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
  n1 = Number(n1)
  n2 = Number(n2)
  switch (operator) {
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

handleDisplay()
