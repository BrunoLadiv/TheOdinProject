import { capitalize, reverseString, calculator } from './index'

describe('capitalize function', () => {
  it('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('world')).toBe('World')
  })
})

describe('reverseString function', () => {
  it('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh')
    expect(reverseString('world')).toBe('dlrow')
  })
})

describe('Calculator', () => {
  it('adds two numbers', () => {
    expect(calculator.add(5, 3)).toBe(8)
  })

  it('subtracts two numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6)
  })

  it('divides two numbers', () => {
    expect(calculator.divide(15, 3)).toBe(5)
  })

  it('returns "Cannot divide by zero" when dividing by zero', () => {
    expect(calculator.divide(10, 0)).toBe('Cannot divide by zero')
  })

  it('multiplies two numbers', () => {
    expect(calculator.multiply(7, 2)).toBe(14)
  })
})
