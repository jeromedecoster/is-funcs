const isBoolean = require('./is-boolean')

module.exports = function(data) {
  if (data === false) return true
  return isBoolean(data) && String(data) === 'false'
}
