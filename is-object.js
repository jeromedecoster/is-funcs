const fn = Object.prototype.toString

module.exports = function(data, check) {
  if (data == null
    || typeof data !== 'object'
    || fn.call(data) !== '[object Object]') return false
  return check === undefined || check === true
    ? Object.keys(data).length > 0
    : true
}
