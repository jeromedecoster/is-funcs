const timeout = require('raf-funcs/timeout')
const fn = Object.prototype.toString

///

function isArray1(data, check) {
  if (data == null || Object.getPrototypeOf(data) !== Array.prototype) return false
  return check === undefined || check === true
    ? data.length > 0
    : true
}

function isArray2(data, check) {
  if (Array.isArray(data) === false) return false
  return check === undefined || check === true
    ? data.length > 0
    : true
}

function isArray3(data, check) {
  if (Array.isArray(data) === false) return false
  return check === undefined || check === true
    ? data.length > 0
    : true
}

function isNumber1(data, check) {
  if (data == null) return false
  check = check === undefined || check === true
  if (typeof data === 'number') {
    return check
      ? data === data
      : true
  }
  if (Object.getPrototypeOf(data) === Number.prototype) {
    return check
      ? isNaN(data) === false
      : true
  }
  return false
}

function isNumber2(data, check) {
  if (data == null || typeof data !== 'number') return false
  return check === undefined || check === true
    ? data === data
    : true
}

function isString1(data, check) {
  if (data == null) return false
  if (typeof data !== 'string'
    && Object.getPrototypeOf(data) !== String.prototype) return false

  return check === undefined || check === true
    ? data.trim().length > 0
    : true
}

function isString2(data, check) {
  if (typeof data !== 'string') return false

  return check === undefined || check === true
    ? data.trim().length > 0
    : true
}

function isObject1(data, check) {
  if (data == null
    || typeof data !== 'object'
    || fn.call(data) !== '[object Object]') return false
  return check === undefined || check === true
    ? Object.keys(data).length > 0
    : true
}

function isObject2(data, check) {
  if (data == null
    || typeof data !== 'object'
    || data === Math) return false
  var p = Object.getPrototypeOf(data)
  if (p !== null && p !== Object.prototype) return false
  return check === undefined || check === true
    ? Object.keys(data).length > 0
    : true
}

function isDefined1(data) {
  if (data == null) return false
  if (typeof data === 'number') return data === data
  if (Object.getPrototypeOf(data) == Number.prototype) return isNaN(data) == false
  return true
}

function isDefined2(data) {
  if (data == null) return false
  if (typeof data === 'number') return data === data
  if (typeof data === 'string' || Array.isArray(data)) return true
  if (Object.getPrototypeOf(data) === Number.prototype) return isNaN(data) == false
  return true
}

function isRegexp1(data) {
  return Object.getPrototypeOf(data) === RegExp.prototype
}

function isRegexp2(data) {
  return typeof data === 'object'
    && typeof data.exec === 'function'
    && typeof data.source === 'string'
    && typeof data.global === 'boolean'
}

///

var out = document.querySelector('p[out]')
var started = Date.now()
var count = 100000000

function log(msg) {
  if (out.innerHTML == '...') {
    out.innerHTML = msg
  } else {
    out.innerHTML = out.innerHTML + '<br>' + msg
  }
}

function next(cb) {
  timeout(cb, 100)
}

function start() {
  return new Promise(function(resolve) {
    log('started')
    next(resolve)
  })
}

function wait(dash) {
  return function() {
    return new Promise(function(resolve) {
      if (dash === true) log('---')
      next(resolve)
    })
  }
}

function array1(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      for (var i = 0; i < count; i++) {
        res = isArray1(arg)
      }

      log('array1: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function array2(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      for (var i = 0; i < count; i++) {
        res = isArray2(arg)
      }

      log('array2: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function array3(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      for (var i = 0; i < count; i++) {
        res = isArray3(arg)
      }

      log('array3: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function number1(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      for (var i = 0; i < count; i++) {
        res = isNumber1(arg)
      }

      log('number1: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function number2(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      for (var i = 0; i < count; i++) {
        res = isNumber2(arg)
      }

      log('number2: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function string1(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      for (var i = 0; i < count; i++) {
        res = isString1(arg)
      }

      log('string1: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function string2(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      for (var i = 0; i < count; i++) {
        res = isString2(arg)
      }

      log('string2: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function object1(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      var n = count / 6
      for (var i = 0; i < n; i++) {
        res = isObject1(arg)
      }

      log('object1: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function object2(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      var n = count / 6
      for (var i = 0; i < n; i++) {
        res = isObject2(arg)
      }

      log('object2: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function defined1(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      var n = count
      for (var i = 0; i < n; i++) {
        res = isDefined1(arg)
      }

      log('defined1: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function defined2(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      var n = count
      for (var i = 0; i < n; i++) {
        res = isDefined2(arg)
      }

      log('defined2: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function regexp1(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      var n = count
      for (var i = 0; i < n; i++) {
        res = isRegexp1(arg)
      }

      log('regexp1: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

function regexp2(arg) {
  return function() {
    return new Promise(function(resolve) {
      var now = Date.now()
      var res
      var n = count
      for (var i = 0; i < n; i++) {
        res = isRegexp2(arg)
      }

      log('regexp2: ' + (Date.now() - now) + ' res:' + res)
      next(resolve)
    })
  }
}

var o = Object.create(null)
o.a = 1
var r = new RegExp('')

Promise.resolve()
.then(start)
.then(wait(true))

.then(array1([1]))
.then(wait)
.then(array1([1]))
.then(wait)
.then(array1('1'))
.then(wait)
.then(array1('1'))
.then(wait)
.then(array2([1]))
.then(wait)
.then(array2([1]))
.then(wait)
.then(array2('1'))
.then(wait)
.then(array2('1'))
.then(wait)
.then(array3([1]))
.then(wait)
.then(array3([1]))
.then(wait)
.then(array3('1'))
.then(wait)
.then(array3('1'))
.then(wait(true))

.then(number1(12.3))
.then(wait)
.then(number1(12.3))
.then(wait)
.then(number1('1.2'))
.then(wait)
.then(number1('1.2'))
.then(wait)
.then(number2(12.3))
.then(wait)
.then(number2(12.3))
.then(wait)
.then(number2('1.2'))
.then(wait)
.then(number2('1.2'))
.then(wait(true))

.then(string1('ab'))
.then(wait)
.then(string1('ab'))
.then(wait)
.then(string1(12.3))
.then(string1(12.3))
.then(wait)
.then(string2('ab'))
.then(wait)
.then(string2('ab'))
.then(wait)
.then(string2(12.3))
.then(wait)
.then(string2(12.3))
.then(wait(true))

.then(object1({a:1}))
.then(wait)
.then(object1({a:1}))
.then(wait)
.then(object1(o))
.then(wait)
.then(object1(o))
.then(wait)
.then(object1('abc'))
.then(wait)
.then(object1('abc'))
.then(wait)
.then(object2({a:1}))
.then(wait)
.then(object2({a:1}))
.then(wait)
.then(object2(o))
.then(wait)
.then(object2(o))
.then(wait)
.then(object2('abc'))
.then(wait)
.then(object2('abc'))
.then(wait(true))

.then(defined1('abc'))
.then(wait)
.then(defined1('abc'))
.then(wait)
.then(defined1(0))
.then(wait)
.then(defined1(0))
.then(wait)
.then(defined2('abc'))
.then(wait)
.then(defined2('abc'))
.then(wait)
.then(defined2(0))
.then(wait)
.then(defined2(0))
.then(wait(true))

.then(regexp1(/./))
.then(wait)
.then(regexp1(/./))
.then(wait)
.then(regexp1(r))
.then(wait)
.then(regexp1(r))
.then(wait)
.then(regexp1('/./'))
.then(wait)
.then(regexp1('/./'))
.then(wait)
.then(regexp2(/./))
.then(wait)
.then(regexp2(/./))
.then(wait)
.then(regexp2(r))
.then(wait)
.then(regexp2(r))
.then(wait)
.then(regexp2('/./'))
.then(wait)
.then(regexp2('/./'))
.then(wait(true))

.then(function() {
  log('done in: ' + (Date.now() - started))
})
