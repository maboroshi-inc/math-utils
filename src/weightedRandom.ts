import { sum } from './'

/**
 * 重み付け乱数を選択する
 *
 * @description `Math.random()` とは異なり **整数値** を返す
 * @param weights 重み付けリスト
 * @returns `weights` に基づいてランダムに `weights` のインデックスを返す
 * @todo `weights` が長大である場合に2分探索させる
 */
export function weightedRandom(weights: number[]) {
  const sortedWeights = Array.from(weights).sort()
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
