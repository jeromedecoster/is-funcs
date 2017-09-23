/**
 * Check if `data` is a defined Number, not equals to `NaN`
 * @param {number} data
 * @return {boolean}
 */
module.exports = function(data) {
  return typeof data === 'number' && data === data
}
