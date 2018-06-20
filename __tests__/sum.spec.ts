import { sum } from '../src'

describe('sum', () => {
  it('全ての引数の合計値を返す', () => {
    expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(55)
  })
})
