/**
 * Check if `data` is a node Buffer
 * @param {Buffer} data
 * @return {boolean}
 */
module.exports = function(data) {
  return (
    // check if node
    typeof process === 'object' &&
    process.versions &&
    process.versions.node &&
    Buffer.isBuffer(data)
  )
}
