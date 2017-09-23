/**
 * Check if `data` is a lower or equal than `than`
 * @param {number} data
 * @param {number} than
 * @return {boolean}
 */
module.exports = function(data, than) {
  return typeof data === 'number' && typeof than === 'number' && data <= than
}
