import { sortedIndex } from '../../src/internal/sortedIndex'

describe('sortedIndex()', () => {
  describe('[0, 1, 3, 6, 10, 15, 21, 28, 36, 45] の配列を調査', () => {
    const arr = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45]

    it('`value = 0`なら`0`を返す', () => {
      expect(sortedIndex(arr, 0)).toEqual(0)
    })

    it('`0 < value <= 1`なら`1`を返す', () => {
      expect(sortedIndex(arr, 0.001)).toEqual(1)
      expect(sortedIndex(arr, 1)).toEqual(1)
    })

    it('`1 < value <= 3`なら`2`を返す', () => {
      expect(sortedIndex(arr, 1.001)).toEqual(2)
      expect(sortedIndex(arr, 3)).toEqual(2)
    })

    it('`3 < value <= 6`なら`3`を返す', () => {
      expect(sortedIndex(arr, 3.001)).toEqual(3)
      expect(sortedIndex(arr, 6)).toEqual(3)
    })

    it('`6 < value <= 10`なら`4`を返す', () => {
      expect(sortedIndex(arr, 6.001)).toEqual(4)
      expect(sortedIndex(arr, 10)).toEqual(4)
    })

    it('`10 < value <= 15`なら`5`を返す', () => {
      expect(sortedIndex(arr, 10.001)).toEqual(5)
      expect(sortedIndex(arr, 15)).toEqual(5)
    })

    it('`15 < value <= 21`なら`6`を返す', () => {
      expect(sortedIndex(arr, 15.001)).toEqual(6)
      expect(sortedIndex(arr, 21)).toEqual(6)
    })

    it('`21 < value <= 28`なら`7`を返す', () => {
      expect(sortedIndex(arr, 21.001)).toEqual(7)
      expect(sortedIndex(arr, 28)).toEqual(7)
    })

    it('`28 < value <= 36`なら`8`を返す', () => {
      expect(sortedIndex(arr, 28.001)).toEqual(8)
      expect(sortedIndex(arr, 36)).toEqual(8)
    })

    it('`36 < value <= 45`なら`9`を返す', () => {
      expect(sortedIndex(arr, 36.001)).toEqual(9)
      expect(sortedIndex(arr, 45)).toEqual(9)
    })

    it('`45 < value`なら`10`を返す', () => {
      expect(sortedIndex(arr, 45.001)).toEqual(10)
    })
  })
})
