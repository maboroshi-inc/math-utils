/**
 * 線形補完した値を返す
 *
 * @param x 始点
 * @param y 終点
 * @param a 求める点
 * @returns 始点 `x` から 終点 `y` の間にある点 `a` を返す
 */
export function mix(x: number, y: number, a: number) {
  return x * (1 - a) + y * a
}
