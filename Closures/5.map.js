/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const result = []
  for (i in arr) {
    console.log(i);
    console.log(arr[i]);
    result.push(fn(arr[i],Number(i),arr));
  }
  return result
};

console.log(map([1,2,3],function (n, i) { return n + i; }));