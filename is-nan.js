module.exports = function(data) {
  return typeof data === 'number'
    && data !== data
}
