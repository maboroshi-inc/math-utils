/**
 * 線形補完した値を返す
 *
 * @param x 始点
 * @param y 終点
 * @param a 求める点 - `0` 以上 `1` 以下
 * @returns 始点 `x` から 終点 `y` の間にある点 `a` を返す
 * @throws `a < 0 || a > 1` の場合に例外を投げる
 */
export function mix(x: number, y: number, a: number) {
  if (a < 0 || a > 1) {
    throw new RangeError('The 3rd argument must be between 0 and 1.')
  }

  return x * (1 - a) + y * a
}
