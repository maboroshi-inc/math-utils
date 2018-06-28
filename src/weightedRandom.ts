/**
 * tree-shaking のためにlodashの関数は個別にimportする
 * また、ts-jest が lodash-es を解決できないので lodash を利用し、型定義は tsconfig にて lodash-es に向ける
 * @see https://github.com/rollup/rollup/wiki/Troubleshooting#tree-shaking-doesnt-seem-to-be-working
 * @see https://medium.com/@martin_hotell/tree-shake-lodash-with-webpack-jest-and-typescript-2734fa13b5cd
 */
import sortedIndex from 'lodash/sortedIndex'
import sortedIndexOf from 'lodash/sortedIndexOf'
import { sum } from './sum'

/**
 * 重み付け乱数を選択する
 *
 * @description `Math.random()` とは異なり **整数値** を返す
 * @param weights 重み付けリスト - 各値はユニークかつ昇順でなくてはならない
 * @param binarySearch 乱数選択を2分探索で行うか否か
 * @returns `weights` に基づいてランダムに `weights` のインデックスを返す
 */
export function weightedRandom(
  weights: number[],
  binarySearch = weights.length > 9
) {
  if (Array.from(new Set(weights)).length < weights.length) {
    throw new Error(
      'Invalid argument. Each element of weights list must be a unique value.'
    )
  }

  const totalWeight = sum(...weights)
  const r = Math.random() * totalWeight

  let index = -1

  if (binarySearch) {
    const tree = weights.reduce((t, w, i) => t.concat(t[i] + w), [0])

    tree.pop()
    index = sortedIndex(tree, r)
  } else {
    let memo = 0

    weights.some((w, i) => {
      memo += w

      if (r < memo) {
        index = i
        return true
      }

      return false
    })
  }

  return binarySearch
    ? sortedIndexOf(weights, weights[index])
    : weights.indexOf(weights[index])
}
