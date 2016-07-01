module.exports = function(data, check, safe) {
  if (data == null) return false
  if (safe === true) {
    if (Object.getPrototypeOf(data) !== String.prototype) return false
  }
  else if (typeof data !== 'string') return false

  return check === undefined || check === true
    ? data.trim().length > 0
    : true
}
