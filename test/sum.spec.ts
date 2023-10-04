import { sum } from '../src/sum/sum'

describe('Test', () => {
  it('Sum', () => {
    const result = sum(4, 2)
    expect(result).toBe(6)
  })
})