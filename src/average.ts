import { sum } from './sum'

/**
 * 平均値を返す
 *
 * @param values （可変長）平均値を求めたい数値の集合
 * @returns `values` の平均値
 */
export function average(...values: number[]) {
  return sum(...values) / values.length
}
