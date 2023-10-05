import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index'

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

describe('caesarCipher function', () => {
  it('shifts characters correctly with a positive shift factor', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd')
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!')
  })

  it('shifts characters correctly with a negative shift factor', () => {
    expect(caesarCipher('bcd', -1)).toBe('abc')
    expect(caesarCipher('abc', -3)).toBe('xyz')
    expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!')
  })

  it('maintains case', () => {
    expect(caesarCipher('AbC', 2)).toBe('CdE')
    expect(caesarCipher('XyZ', -3)).toBe('UvW')
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!')
  })

  it('preserves punctuation and non-alphabetical characters', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!')
    expect(caesarCipher('123 456 !@#', 7)).toBe('123 456 !@#')
  })

  it('wraps from z to a and Z to A', () => {
    expect(caesarCipher('xyzXYZ', 3)).toBe('abcABC')
    expect(caesarCipher('abcABC', -3)).toBe('xyzXYZ')
  })
})

describe('analyzeArray function', () => {
  it('returns the correct analysis for a non-empty array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    })
  })

  it('returns NaN for average, undefined for min and max, and 0 for length for an empty array', () => {
    expect(analyzeArray([])).toEqual({
      average: NaN,
      min: undefined,
      max: undefined,
      length: 0,
    })
  })

  it('throws an error for a non-array input', () => {
    expect(() => analyzeArray('not an array')).toThrowError(
      'Input is not an array'
    )
  })
})
