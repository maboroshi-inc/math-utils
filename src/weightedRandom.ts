import { sortedIndex, sortedIndexOf } from 'lodash-es'
import { sum } from './sum'

/**
 * 重み付け乱数を選択する
 *
 * @description `Math.random()` とは異なり **整数値** を返す
 * @param weights 重み付けリスト - 各値はユニークでなくてはならない
 * @param binarySearch 乱数選択を2分探索で行うか否か
 * @returns `weights` に基づいてランダムに `weights` のインデックスを返す
 * @todo テストを書く
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

  const sortedWeights = Array.from(weights).sort((a, b) => a - b)
  const totalWeight = sum(...sortedWeights)
  const r = Math.random() * totalWeight

  let index = -1

  if (binarySearch) {
    const tree = sortedWeights.reduce((t, w, i) => t.concat(t[i] + w), [0])

    tree.pop()
    index = sortedIndex(sortedWeights, r)
  } else {
    let memo = 0

    sortedWeights.some((w, i) => {
      memo += w

      if (r < memo) {
        index = i
        return true
      }

      return false
    })
  }

  return binarySearch
    ? sortedIndexOf(weights, sortedWeights[index])
    : weights.indexOf(sortedWeights[index])
}
