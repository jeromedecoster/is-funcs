const isTrue = require('./is-true')

module.exports = function(data, check) {
  if (data == null || Object.getPrototypeOf(data) !== Array.prototype) return false
  return check === undefined || isTrue(check)
    ? data.length > 0
    : true
}
