module.exports = function(data, filled) {
  if (data == null) return false
  if (data.constructor && data.constructor.name != 'Object') return false
  if (data === Math || data === JSON) return false
  return filled === true
    ? Object.keys(data).length > 0
    : true
}
