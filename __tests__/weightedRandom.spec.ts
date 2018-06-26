import { map, weightedRandom } from '../src'

describe('weightedRandom()', () => {
  it('10万個の乱数の発生割合が重み付けリストの内容に収束する', () => {
    const weights = [5, 2, 3, 1, 4]
    const counts = Array(weights.length).fill(0)

    let r

    for (let i = 0; i < 100000; i++) {
      r = weightedRandom(weights)
      counts[r] += 1
    }

    const min1 = Math.min(...counts)
    const max1 = Math.max(...counts)
    const min2 = Math.min(...weights)
    const max2 = Math.max(...weights)

    return Promise.all(
      counts.map((val, i) =>
        expect(map(val, min1, max1, min2, max2)).toBeCloseTo(weights[i], 0)
      )
    )
  })
})
