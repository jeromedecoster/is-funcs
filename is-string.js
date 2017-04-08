module.exports = function(data, filled) {
  if (typeof data !== 'string') return false
  return filled === true
    ? data.trim().length > 0
    : true
}
