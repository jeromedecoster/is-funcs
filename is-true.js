const isBoolean = require('./is-boolean')

module.exports = function(data) {
  if (data === true) return true
  return isBoolean(data) && String(data) === 'true'
}
