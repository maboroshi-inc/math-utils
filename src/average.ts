import { sum } from './sum'

/**
 * Get the average of values.
 *
 * @param values Numbers to calculate average.
 * @returns The average of `values`
 */
export function average(...values: number[]) {
  return sum(...values) / values.length
}
