/**
 * 数値を最小値以上・最大値以下に丸める
 * @param value 制限を適用したい値
 * @param minOrMax 最小値、ないし `max` を省略した場合は最大値
 * @param max 最大値
 * @returns `value` を `minOrMax` 以上 `max` 以下に丸めて返す
 */
export function clamp(value: number, minOrMax: number, max?: number) {
  if (max === undefined) {
    max = minOrMax
    minOrMax = 0
  }

  return Math.max(minOrMax, Math.min(value, max))
}
