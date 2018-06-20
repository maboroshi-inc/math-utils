import { direction } from '../src'

describe('direction()', () => {
  it('座標（ `0, 0` ）から見た座標（ `3, 4` ）の方向を返す', () => {
    expect(direction(3, 4)).toEqual(Math.atan2(3, 4))
  })

  it('座標（ `-1, -2` ）から見た座標（ `2, 2` ）の方向を返す', () => {
    expect(direction(-1, -2, 2, 2)).toEqual(Math.atan2(-3, -4))
  })
})
