const isNumber = require('./is-number')

module.exports = function(data) {
  return isNumber(data)
    && (data == data >> 0 || data === Infinity || data === -Infinity)
}
