/**
 * 2点間の距離を返す
 *
 * @param x1 始点のX座標
 * @param y1 始点のY座標
 * @param x2 終点のX座標
 * @param y2 終点のY座標
 * @returns 始点（ `x1, y1` ）と終点（ `x2, y2` ）の距離を返す
 */
export function distance(x1: number, y1: number, x2 = 0, y2 = 0) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}
