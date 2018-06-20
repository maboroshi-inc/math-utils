/**
 * 点P1から見た点P2の方向を返す
 *
 * @param x1 始点のX座標
 * @param y1 始点のY座標
 * @param x2 終点のX座標
 * @param y2 終点のY座標
 * @returns 始点（ `x1, y1` ）から見た終点（ `x2, y2` ）の方向をラジアンで返す
 */
export function direction(x1: number, y1: number, x2 = 0, y2 = 0) {
  return Math.atan2(x1 - x2, y1 - y2)
}
