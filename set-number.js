const isNumber = require('./is-number')

module.exports = function(data, fallback, min, max) {
  if (isNumber(data) === false) {
    if (fallback === null) return null
    return isNumber(fallback)
      ? +fallback
      : 0
  }
  if (isNumber(min)) {
    if (isNumber(max)) {
      if (max < min) {
        var t = min
        min = max
        max = t
      }
      if (data > max) return +max
    }
    if (data < min) return +min
  }
  return +data
}
