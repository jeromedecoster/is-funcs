const isArray    = require('./is-array')
const isBoolean  = require('./is-boolean')
const isDefined  = require('./is-defined')
const isFloat    = require('./is-float')
const isFunction = require('./is-function')
const isGt       = require('./is-gt')
const isGte      = require('./is-gte')
const isInteger  = require('./is-integer')
const isLt       = require('./is-lt')
const isLte      = require('./is-lte')
const isnan      = require('./is-nan')
const isNode     = require('./is-node')
const isNumber   = require('./is-number')
const isObject   = require('./is-object')
const isString   = require('./is-string')

module.exports = function(str, data) {
  if (!isString(str)) return false
  var a, fn, arg
  return str.trim().toLowerCase().split(/\s+/).every(function(e) {
    a   = e.split(':')
    fn  = a[0]
    arg = undefined

    if (a.length > 1) {
      arg = a[1]

      if (fn == 'array' || fn == 'number' || fn == 'object' || fn == 'string') {
        if (arg !== 'false') arg = undefined
      }
    }

    if (fn == 'array')    return isArray(data, arg)
    if (fn == 'boolean')  return isBoolean(data)
    if (fn == 'defined')  return isDefined(data)
    if (fn == 'float')    return isFloat(data)
    if (fn == 'function') return isFunction(data)
    if (fn == 'integer')  return isInteger(data)
    if (fn == 'nan')      return isnan(data)
    if (fn == 'node')     return isNode(data)
    if (fn == 'number')   return isNumber(data, arg)
    if (fn == 'object')   return isObject(data, arg)
    if (fn == 'string')   return isString(data, arg)

    var num = parseFloat(arg)
    if (String(num) != arg) return false
    if (fn == 'lt')  return isLt(data, num)
    if (fn == 'lte') return isLte(data, num)
    if (fn == 'gt')  return isGt(data, num)
    if (fn == 'gte') return isGte(data, num)

    return false
  })
}
