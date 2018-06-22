/**
 * 一方の集合の各元に対し
 * 他方の集合のただひとつの元を返す
 *
 * @param value 写像を求める値
 * @param min1 写像元の集合の最小値
 * @param max1 写像元の集合の最大値
 * @param min2 写像先の集合の最小値
 * @param max2 写像先の集合の最大値
 * @returns `value` を `min1` 以上 `max1` 以下の集合から `min2` 以上 `max2` 以下の集合へ写像したときの値を返す
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
