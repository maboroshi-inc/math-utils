/**
 * @hidden 指定値を挿入しうる配列中の位置を2分探索で特定する
 *
 * @param array 調査対象配列
 * @param value 評価値
 */
export function sortedIndex(array: number[], value: number): number {
  const { length } = array

  if (length > 1) {
    const mid = length >> 1 // @see https://github.com/darkskyapp/binary-search

    if (value < array[mid]) {
      return sortedIndex(array.slice(0, mid), value)
    } else {
      return mid + sortedIndex(array.slice(mid), value)
    }
  }

  return length === 1 && array[0] < value ? 1 : 0
}
