module.exports = function(data) {
  return typeof process === 'object'
    && typeof process.execPath === 'string'
    && data instanceof Buffer
}
