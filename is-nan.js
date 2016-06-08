const fn = Object.prototype.toString

module.exports = function(data) {
  if (typeof data === 'number') return data !== data
  if (data != null && Object.getPrototypeOf(data) === Number.prototype) return isNaN(data)
  return false
}
