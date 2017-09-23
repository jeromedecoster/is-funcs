/**
 * Check if `data` is a valid instance of `new Date`
 * @param {Date} data
 * @return {boolean}
 */
module.exports = function(data) {
  return (
    data != null && data instanceof Date && data.getTime() === data.getTime()
  )
}
