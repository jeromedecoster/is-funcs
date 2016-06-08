module.exports = function(data) {
  return !!data
    && data.nodeType == 1
    && typeof data.getClientRects == 'function'
    && data.getClientRects().length > 0
    && document.body.contains(data)
}
