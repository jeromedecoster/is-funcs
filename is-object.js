const fn = Object.prototype.toString
const isTrue = require('./is-true')

module.exports = function(data, check) {
  if (data == null
    || typeof data !== 'object'
    || fn.call(data) !== '[object Object]') return false
  return check === undefined || isTrue(check)
    ? Object.keys(data).length > 0
    : true
}
