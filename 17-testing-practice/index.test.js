import { capitalize } from './index'

describe('capitalize function', () => {
  it('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('world')).toBe('World')
  })
})
