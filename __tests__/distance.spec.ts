import { distance } from '../src/distance'

describe('distance()', () => {
  it('座標（ `0, 0` ）と座標（ `3, 4` ）の距離を返す', () => {
    expect(distance(3, 4)).toEqual(5)
  })

  it('座標（ `-1, -2` ）と座標（ `2, 2` ）の距離を返す', () => {
    expect(distance(-1, -2, 2, 2)).toEqual(5)
  })
})
