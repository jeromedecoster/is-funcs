/**
 * Check if `data` is a real `NaN` Number
 * @param {number} data
 * @return {boolean}
 */
module.exports = function(data) {
  return typeof data === 'number' && data !== data
}
