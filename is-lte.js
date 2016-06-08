const isNumber = require('./is-number')

module.exports = function(data, than) {
  return isNumber(data)
    && isNumber(than)
    && data <= than
}
