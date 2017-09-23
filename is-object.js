/**
 * Simplest and fastest way to check if `data` is an Object
 * @param {Object} data
 * @return {boolean}
 */
module.exports = function(data) {
  return data !== null && typeof data === 'object'
}
