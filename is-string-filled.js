const REGEXP = /[\u180E\u200B]/gi

/**
 * Check if `data` is an String and his trimmed length is > 0
 * @param {string} data
 * @return {boolean}
 */
module.exports = function(data) {
  if (typeof data !== 'string') return false
  return data.replace(REGEXP, '').trim().length > 0
}
