import { mix } from '../src'

describe('mix()', () => {
  it('始点100から終点300の中間点を返す', () => {
    expect(mix(100, 300, 0.5)).toEqual(200)
  })

  it('第3引数に0未満の値を与えた場合0として扱われる', () => {
    expect(mix(100, 300, -1)).toEqual(100)
  })

  it('第3引数に1より大きな値を与えた場合1として扱われる', () => {
    expect(mix(100, 300, 1.001)).toEqual(300)
  })
})
