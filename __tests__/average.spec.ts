import { average } from '../src'

describe('average()', () => {
  it('全ての引数の平均値を返す', () => {
    expect(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(5.5)
  })
})
