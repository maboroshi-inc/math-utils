/**
 * 合計値を返す
 *
 * @param values （可変長）合計値を求めたい数値の集合
 * @returns `values` の合計値
 */
export function sum(...values: number[]) {
  return values.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )
}
