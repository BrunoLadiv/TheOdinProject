function fibs(n) {
  if (n <= 0) {
    return []
  } else if (n === 1) {
    return [0]
  } else if (n === 2) {
    return [0, 1]
  }

  const fibonacciSequence = [0, 1]
  while (fibonacciSequence.length < n) {
    const nextNumber =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2]
    fibonacciSequence.push(nextNumber)
  }

  return fibonacciSequence
}

console.log(fibs(8))
// Output: [0, 1, 1, 2, 3, 5, 8, 13]

// fibonnaci recursive

function fibsRec(n, sequence = [0, 1]) {
  if (n <= sequence.length) {
    return sequence.slice(0, n)
  }

  const nextNumber =
    sequence[sequence.length - 1] + sequence[sequence.length - 2]
  return fibsRec(n, [...sequence, nextNumber])
}


console.log(fibsRec(8))
// Output: [0, 1, 1, 2, 3, 5, 8, 13]
