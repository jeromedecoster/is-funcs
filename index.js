
exports.is         = is
exports.isArray    = isArray
exports.isBoolean  = isBoolean
exports.isDefined  = isDefined
exports.isFloat    = isFloat
exports.isFunction = isFunction
exports.isGt       = isGt
exports.isGte      = isGte
exports.isInteger  = isInteger
exports.isLt       = isLt
exports.isLte      = isLte
exports.isNode     = isNode
exports.isNumber   = isNumber
exports.isObject   = isObject
exports.isString   = isString

function type(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1)
}

function is(str, data) {
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

function isArray(data, check) {
  if (type(data) !== 'array') return false
  return check === undefined || check === true
    ? data.length > 0
    : true
}

function isBoolean(data) {
  return data === true || data === false
}

function isDefined(data) {
  var str = type(data)
  return data === undefined
    || data === null
    || (str === 'number' && data !== data)
    || (str === 'object' && Object.keys(data).length == 0)
    || (str === 'array'  && data.length == 0)
    || (str === 'string' && data.trim().length == 0)
      ? false
      : true
}

function isFloat(data) {
  return isNumber(data) && data !== Infinity && data !== -Infinity && data !== (data | 0)
}

function isFunction(data) {
  return type(data) === 'function'
}

function isGt(data, than) {
  return isNumber(data) && isNumber(than) && data > than
}

function isGte(data, than) {
  return isNumber(data) && isNumber(than) && data >= than
}

function isInteger(data) {
  return isNumber(data)
    && (data === data >> 0 || data === Infinity || data === -Infinity)
}

function isLt(data, than) {
  return isNumber(data) && isNumber(than) && data < than
}

function isLte(data, than) {
  return isNumber(data) && isNumber(than) && data <= than
}

function isNode(data) {
  return !!data
    && data.nodeType == 1
    && typeof data.getClientRects == 'function'
    && data.getClientRects().length > 0
    && document.body.contains(data)
}

function isNumber(data, check) {
  if (type(data) !== 'number') return false
  return check === undefined || check === true
    ? data === data
    : true
}

function isObject(data, check) {
  if (type(data) !== 'object') return false
  return check === undefined || check === true
    ? Object.keys(data).length > 0
    : true
}

function isString(data, check) {
  if (type(data) !== 'string') return false
  return check === undefined || check === true
    ? data.trim().length > 0
    : true
}
