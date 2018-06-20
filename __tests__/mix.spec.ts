import { mix } from '../src'

describe('mix()', () => {
  it('始点100から終点300の中間点を返す', () => {
    expect(mix(100, 300, 0.5)).toEqual(200)
  })
})
