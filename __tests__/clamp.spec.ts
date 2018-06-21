import { clamp } from '../src'

describe('clamp()', () => {
  it('値を`0`以上`3`以下に丸める', () => {
    const max = 3

    expect(clamp(-1, max)).toEqual(0)
    expect(clamp(0, max)).toEqual(0)
    expect(clamp(1, max)).toEqual(1)
    expect(clamp(2, max)).toEqual(2)
    expect(clamp(3, max)).toEqual(3)
    expect(clamp(4, max)).toEqual(max)
  })

  it('値を`1`以上`4`以下に丸める', () => {
    const min = 1
    const max = 4

    expect(clamp(0, min, max)).toEqual(min)
    expect(clamp(1, min, max)).toEqual(1)
    expect(clamp(2, min, max)).toEqual(2)
    expect(clamp(3, min, max)).toEqual(3)
    expect(clamp(4, min, max)).toEqual(4)
    expect(clamp(5, min, max)).toEqual(max)
  })
})
