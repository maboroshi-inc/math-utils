import sortedIndex from 'lodash/sortedIndex'
import { map, weightedRandom } from '../src'

jest.mock('lodash/sortedIndex', () => {
  return jest.fn(require.requireActual('lodash/sortedIndex'))
})

describe('weightedRandom()', () => {
  afterEach(() => {
    ;(sortedIndex as jest.Mock).mockClear()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('重み付けリストに重複値が含まれている場合は例外を投げる', () => {
    expect(() => weightedRandom([1, 1, 2, 3])).toThrowError()
  })

  it('重み付けリストが昇順でない場合は例外を投げる', () => {
    expect(() => weightedRandom([1, 2, 4, 3])).toThrowError()
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
      expect.assertions(5)
      return createAssertion([1, 2, 3, 4, 5])
    })

    it('乱数の発生割合が10件以上の長さを持つ重み付けリストの内容にも収束する', () => {
      expect.assertions(10)
      return createAssertion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  })

  describe('2分探索', () => {
    it('10件以上の長さを持つ重み付けリストを渡した場合はデフォルトで2分探索する', () => {
      weightedRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

      expect(sortedIndex).toHaveBeenCalled()
    })

    it('`binarySearch = true` ならば常に2分探索する', () => {
      weightedRandom([1, 2, 3, 4, 5, 6, 7, 8, 9], true)

      expect(sortedIndex).toHaveBeenCalled()
    })

    it('`binarySearch = false` ならば常に2分探索しない', () => {
      weightedRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], false)

      expect(sortedIndex).not.toHaveBeenCalled()
    })
  })
})
