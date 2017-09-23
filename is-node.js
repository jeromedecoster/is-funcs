/**
 * Check if `data` is a Html Element with a nodeType of `1`
 * @param {Node} data
 * @return {boolean}
 */
module.exports = function(data) {
  return (
    typeof window === 'object' &&
    data instanceof window.Node &&
    data.nodeType == 1
  )
}
