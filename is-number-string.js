/**
 * Check if `data` is a valid number string representation
 * @param {string} data
 * @return {boolean}
 */
module.exports = function(data) {
  if (typeof data !== 'string') return false
  var n = +data
  if (typeof n === 'number' && n === n) {
    return true
  }
  var s = data.trim()
  return s === 'NaN' || s === '-NaN' || s === '+NaN'
}
