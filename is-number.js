module.exports = function(data, check) {
  if (data == null) return false
  check = check === undefined || check === true
  if (typeof data === 'number') {
    return check
      ? data === data
      : true
  }
  if (Object.getPrototypeOf(data) === Number.prototype) {
    return check
      ? isNaN(data) === false
      : true
  }
  return false
}
