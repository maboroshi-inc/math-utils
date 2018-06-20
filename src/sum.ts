/**
 * Get the total of values.
 *
 * @param values Numbers to calculate total
 * @returns The total of `values`
 */
export function sum(...values: number[]) {
  return values.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )
}
