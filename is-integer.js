/**
 * Check if `data` is an Integer Number
 * @param {number} data
 * @return {boolean}
 */
module.exports = function(data) {
  return (
    typeof data === 'number' &&
    data === data &&
    (data == data >> 0 || data === Infinity || data === -Infinity)
  )
}
