import { average } from '../src'

describe('average', () => {
  it('returns the average of values', () => {
    expect(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(5.5)
  })
})
