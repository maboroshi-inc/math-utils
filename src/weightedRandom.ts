import { sortedIndex } from './internal/sortedIndex'
import { sum } from './sum'

/**
 * 重み付け乱数を選択する
 * - `Math.random()` とは異なり **整数値** を返す
 *
 * @param weights 重み付けリスト - 各値は **ユニーク** かつ **昇順** でなくてはならない
 * @param binarySearch 乱数選択を2分探索で行うか否か
 * @returns `weights` に基づいてランダムに `weights` のインデックスを返す
 * @throws `weights` に重複値が含まれている場合に例外を投げる
 * @throws `weights` が昇順でない場合に例外を投げる
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

  if (weights.some((w, i) => i > 0 && weights[i - 1] > w)) {
    throw new Error('Invalid argument. The weights list must be in ascending.')
  }

  const totalWeight = sum(...weights)
  const r = Math.random() * totalWeight

  let index = -1

  if (binarySearch) {
    const tree = weights.reduce((t, w, i) => t.concat(t[i] + w), [0])

    tree.pop()
    index = sortedIndex(tree, r) - 1
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

  return index
}
