const isTrue = require('./is-true')

module.exports = function(data, check) {
  if (data == null) return false
  if (typeof data !== 'string'
    && Object.getPrototypeOf(data) !== String.prototype) return false

  return check === undefined || isTrue(check)
    ? data.trim().length > 0
    : true
}
