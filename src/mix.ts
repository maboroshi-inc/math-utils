import { clamp } from './clamp'

/**
 * 線形補完した値を返す
 *
 * @param x 始点
 * @param y 終点
 * @param a 求める点 - `0` 以上 `1` 以下
 * @returns 始点 `x` から 終点 `y` の間にある点 `a` を返す
 */
export function mix(x: number, y: number, a: number) {
  const _a = clamp(a, 1)

  if (a < 0 || a > 1) {
    console.warn(
      `[@maboroshi/math-utils/mix]\nThe 3rd argument must be greater than or equal to 0 and less than or equal to 1.\nNow the argument has clamped to ${_a}`
    )
  }

  return x * (1 - _a) + y * _a
}
