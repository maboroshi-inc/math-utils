import { sum } from '../src'

describe('sum', () => {
  it('returns the total of values', () => {
    expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(55)
  })
})
