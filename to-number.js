const isNumber = require('./is-number')
const isString = require('./is-string')

module.exports = function(data, fallback) {
  if (isNumber(data)) return +data
  if (isString(data)) {
    data = data.trim().toLowerCase()
    if (data === 'infinity') return Infinity
    if (data === '-infinity') return -Infinity
    var n = +data
    if ((n - n + 1) >= 0) return n
  }

  if (fallback === null) return null
  if (isNumber(fallback)) return +fallback
}
