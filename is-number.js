module.exports = function(data, check, safe) {
  if (data == null) return false
  if (typeof data === 'number') {
    return check === undefined || check === true
      ? data === data
      : true
  }
  if (safe === true && Object.getPrototypeOf(data) === Number.prototype) {
    return check === undefined || check === true
      ? isNaN(data) === false
      : true
  }
  return false
}
