import { sum } from './sum'

/**
 * 重み付け乱数を選択する
 *
 * @description `Math.random()` とは異なり **整数値** を返す
 * @param weights 重み付けリスト - 各値はユニークでなくてはならない
 * @returns `weights` に基づいてランダムに `weights` のインデックスを返す
 * @todo `weights` が長大である場合に2分探索させる
 */
export function weightedRandom(weights: number[]) {
  if (Array.from(new Set(weights)).length < weights.length) {
    throw new Error(
      'Invalid argument. Each element of weights list must be a unique value.'
    )
  }

  const sortedWeights = Array.from(weights).sort((a, b) => a - b)
  const totalWeight = sum(...sortedWeights)
  const r = Math.random() * totalWeight

  let memo = 0
  let index = -1

  sortedWeights.some((w, i) => {
    memo += w

    if (r < memo) {
      index = i
      return true
    }

    return false
  })

  return weights.indexOf(sortedWeights[index])
}
