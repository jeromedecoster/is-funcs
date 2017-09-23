/**
 * Check if `data` is an Array and is length is > 0
 * @param {array} data
 * @return {boolean}
 */
module.exports = function(data) {
  return Array.isArray(data) && data.length > 0
}
