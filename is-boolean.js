module.exports = function(data) {
  if (data == null) return false
  return data === true
    || data === false
    || Object.getPrototypeOf(data) === Boolean.prototype
}
