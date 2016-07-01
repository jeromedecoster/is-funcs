const isNumber = require('./is-number')

module.exports = function(data, than, safe) {
  return isNumber(data, true, safe)
    && isNumber(than, true, safe)
    && data <= than
}
