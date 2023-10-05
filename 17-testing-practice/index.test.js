import { capitalize, reverseString } from './index'

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
