var toString = Object.prototype.toString

/**
 * Check if `data` is a Plain Object
 * @param {Object} data
 * @return {boolean}
 */
module.exports = function(data) {
  if (data === null || data === undefined) return false
  if (data.constructor && data.constructor.name != 'Object') return false
  if (data === Math || data === JSON || data === Intl) return false
  if (toString.call(data) !== '[object Object]') return false
  if (typeof Reflect === 'object' && data === Reflect) return false
  return true
}
