import { map } from '../src'

describe('map()', () => {
  const min1 = 0
  const max1 = 1
  const min2 = 0
  const max2 = 600

  it('10%のデータを1の大きさの集合に写像したときの値を返す', () => {
    expect(map(0.1, min1, max1)).toEqual(0.1)
  })

  it('10%のデータを600の大きさの集合に写像したときの値を返す', () => {
    expect(map(0.1, min1, max1, min2, max2)).toEqual(60)
  })

  it('50%のデータを600の大きさの集合に写像したときの値を返す', () => {
    expect(map(0.5, min1, max1, min2, max2)).toEqual(300)
  })

  it('40%のデータを600の大きさの集合に写像したときの値を返す', () => {
    expect(map(0.4, min1, max1, min2, max2)).toEqual(240)
  })

  it('75%のデータを600の大きさの集合に写像したときの値を返す', () => {
    expect(map(0.75, min1, max1, min2, max2)).toEqual(450)
  })

  it('60%のデータを600の大きさの集合に写像したときの値を返す', () => {
    expect(map(0.6, min1, max1, min2, max2)).toEqual(360)
  })

  it('90%のデータを600の大きさの集合に写像したときの値を返す', () => {
    expect(map(0.9, min1, max1, min2, max2)).toEqual(540)
  })
})
