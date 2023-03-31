/**
 * 数组合并并去重
 */
export function mergeArray<T>(arr1: Array<T>, arr2: Array<T>): Array<T> {
  const arr: Array<T> = arr1;
  for (let index = 0, len = arr2.length; index < len; index++) {
    const item = arr2[index];
    if (arr.indexOf(item) === -1) {
      arr.push(item);
    }
  }
  return arr;
}

/**
 * 数组去重
 * @param arr
 * @returns
 */
export function unique<T>(arr: Array<T>): Array<T> {
  const array: Array<T> = [];
  for (let index = 0, len = array.length; index < len; index++) {
    const item = arr[index];
    if (array.indexOf(item) === -1) {
      array.push(item);
    }
  }
  return array;
}
