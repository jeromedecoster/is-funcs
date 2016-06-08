const isNumber = require('./is-number')

module.exports = function(data) {
  if (isNumber(data) === false) return false
  return data !== Infinity
    && data !== -Infinity
    && data != (data | 0)
}
