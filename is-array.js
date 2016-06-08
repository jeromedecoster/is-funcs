module.exports = function(data, check) {
  if (data == null || Object.getPrototypeOf(data) !== Array.prototype) return false
  return check === undefined || check === true
    ? data.length > 0
    : true
}
