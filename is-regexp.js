/**
 * Check if `data` is a RegExp
 * @param {RegExp} data
 * @return {boolean}
 */
module.exports = function(data) {
  return (
    data !== null &&
    data !== undefined &&
    typeof data.exec === 'function' &&
    typeof data.source === 'string' &&
    typeof data.global === 'boolean'
  )
}
