import { map, weightedRandom } from '../src'

describe('weightedRandom()', () => {
  it('重み付けリストに重複値が含まれている場合は例外が発生する。', () => {
    expect(() => weightedRandom([1, 1, 2, 3])).toThrowError()
  })

  describe('10万件の乱数を発生させる', () => {
    const createAssertion = (weights: number[]) => {
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
    }

    it('乱数の発生割合が重み付けリストの内容に収束する', () => {
      return createAssertion([5, 2, 3, 1, 4])
    })

    it('乱数の発生割合が10件以上の長さを持つ重み付けリストの内容にも収束する', () => {
      return createAssertion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  })
})
