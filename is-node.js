module.exports = function(data) {
  return typeof window === 'object'
    && data instanceof window.Node
    && data.nodeType == 1
    && document.body.contains(data)
    && data.getClientRects().length > 0
}
