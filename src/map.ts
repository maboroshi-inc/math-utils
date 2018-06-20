/**
 * 一方の集合の各元に対し
 * 他方の集合のただひとつの元を返す
 *
 * @param value 写像を求める値
 * @param min1 データの最小値
 * @param max1 データの最大値
 * @param min2 絶対最小値
 * @param max2 絶対最大値
 * @returns `value` を `min1` から `max1` の集合を `min2` から `max2` の集合に写像したときの値を返す
 */
export function map(
  value: number,
  min1: number,
  max1: number,
  min2 = min1,
  max2 = max1
) {
  return min2 + (max2 - min2) * ((value - min1) / (max1 - min1))
}
