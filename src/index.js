
exports.min = function min (array) {
  let res = 0
  !array || !array.length ? res : res = Math.min(...array)
  return res
}

exports.max = function max (array) {
  let res = 0
  !array || !array.length ? res : res = Math.max(...array)
  return res
}

exports.avg = function avg (array) {
  let res = 0
  !array || !array.length ? res : res = (array.reduce((acc, el) => acc + el, 0) / array.length)
  return res;
}
