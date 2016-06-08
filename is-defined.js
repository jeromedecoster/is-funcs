const fn = Object.prototype.toString

module.exports = function(data) {
  if (data == null) return false
  if (typeof data === 'number') return data === data
  if (typeof data === 'string') return data.trim().length > 0
  var proto = Object.getPrototypeOf(data)
  if (proto == Number.prototype) return isNaN(data) === false
  if (proto == String.prototype) return data.trim().length > 0
  if (proto == Array.prototype)  return data.length > 0
  if (fn.call(data) === '[object Object]') return Object.keys(data).length > 0
  return true
}
