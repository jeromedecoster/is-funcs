/**
 * Check if `data` is a Float Number
 * @param {number} data
 * @return {boolean}
 */
module.exports = function(data) {
  return (
    typeof data === 'number' &&
    data === data &&
    data !== Infinity &&
    data !== -Infinity &&
    data != (data | 0)
  )
}
