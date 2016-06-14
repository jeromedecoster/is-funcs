const isString = require('./is-string')
const isArray = require('./is-array')

module.exports = function(data, fallback, allowed) {
  if (isString(data, false) === false) return toFallback(fallback)
  data = toPrimitive(data)
  if (isString(allowed)) {
    allowed = allowed.trim().split(/ +/)
    var ok = true
  }
  if (ok === true || isArray(allowed)) {
    return allowed.some(function(e) { return toPrimitive(e) == data })
      ? data
      : toFallback(fallback)
  }
  return data
}

function toFallback(fallback) {
  if (fallback === null) return null
  return isString(fallback, false)
    ? toPrimitive(fallback)
    : ''
}

// convert new String('') to primitive ''
function toPrimitive(data) {
  return typeof data === 'string'
    ? data
    : String(data)
}
