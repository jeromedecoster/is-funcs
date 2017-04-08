module.exports = function(data) {
  return typeof data === 'number'
    && data === data
    && data !== Infinity
    && data !== -Infinity
    && data != (data | 0)
}
