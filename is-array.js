module.exports = function(data, filled) {
  if (Array.isArray(data) === false) return false
  return filled === true
    ? data.length > 0
    : true
}
