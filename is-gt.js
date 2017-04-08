module.exports = function(data, than) {
  return typeof data === 'number'
    && typeof than === 'number'
    && data > than
}
