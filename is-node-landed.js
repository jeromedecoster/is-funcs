/**
 * Check if `data` is a Html Element with a nodeType of `1` landed in the `document.body`
 * @param {Node} data
 * @return {boolean}
 */
module.exports = function(data) {
  return (
    typeof window === 'object' &&
    data instanceof window.Node &&
    data.nodeType == 1 &&
    document.body.contains(data) &&
    data.getClientRects().length > 0
  )
}
