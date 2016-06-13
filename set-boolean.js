const isBoolean = require('./is-boolean')

module.exports = function(data, fallback) {
  if (isBoolean(data) === false) {
    if (fallback === null) return null
    return isBoolean(fallback)
      ? toPrimitive(fallback)
      : false
  }
  return toPrimitive(data)
}

// convert new Boolean(true|false) to primitive true|false
function toPrimitive(data) {
  if (typeof data === 'boolean') return data
  return String(data) === 'true'
    ? true
    : false
}
