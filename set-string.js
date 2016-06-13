const isString = require('./is-string')
const isArray = require('./is-array')

module.exports = function(data, fallback, allowed) {
  if (isString(data, false) === false) return toFallback(fallback)
  data = toPrimitive(data)
  if (isArray(allowed)) {
    if (allowed.some(function(e) { return toPrimitive(e) == data })) return data
    return toFallback(fallback)
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
