const fn = require('../is-function')

test('is-function', () => {
  var noop = function() {}
  var Foo = function() {}
  Foo.prototype.test = function() {}
  var f1 = new Foo()

  expect(fn(noop)).toBe(true)
  expect(fn(Math.max)).toBe(true)
  expect(fn(f1.test)).toBe(true)
  expect(fn(Foo.prototype.test)).toBe(true)
  expect(fn(setTimeout)).toBe(true)
  expect(fn(Foo)).toBe(true)
  expect(fn(class A {})).toBe(true)
  expect(fn(class {})).toBe(true)

  var gen = function* gen() {
    yield 1
    yield 2
    yield 3
  }
  expect(fn(gen)).toBe(true)

  var asy = async function asy() {}
  expect(fn(asy)).toBe(true)

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
  expect(fn(Infinity)).toBe(false)
  expect(fn(NaN)).toBe(false)
  expect(fn(undefined)).toBe(false)
  expect(fn(null)).toBe(false)

  // should be true
  expect(fn(eval)).toBe(false)
  expect(fn(isFinite)).toBe(false)
  expect(fn(isNaN)).toBe(false)
  expect(fn(parseFloat)).toBe(false)
  expect(fn(parseInt)).toBe(false)
  expect(fn(decodeURI)).toBe(false)
  expect(fn(decodeURIComponent)).toBe(false)
  expect(fn(encodeURI)).toBe(false)
  expect(fn(encodeURIComponent)).toBe(false)

  expect(fn(Object)).toBe(false)
  expect(fn(Function)).toBe(false)
  expect(fn(Boolean)).toBe(false)
  expect(fn(Symbol)).toBe(false)
  expect(fn(Error)).toBe(false)
  expect(fn(EvalError)).toBe(false)
  expect(fn(RangeError)).toBe(false)
  expect(fn(ReferenceError)).toBe(false)
  expect(fn(SyntaxError)).toBe(false)
  expect(fn(TypeError)).toBe(false)
  expect(fn(URIError)).toBe(false)

  expect(fn(Number)).toBe(false)
  expect(fn(Math)).toBe(false)
  expect(fn(Date)).toBe(false)

  expect(fn(String)).toBe(false)
  expect(fn(RegExp)).toBe(false)

  expect(fn(Array)).toBe(false)
  expect(fn(Int8Array)).toBe(false)
  expect(fn(Uint8Array)).toBe(false)
  expect(fn(Uint8ClampedArray)).toBe(false)
  expect(fn(Int16Array)).toBe(false)
  expect(fn(Uint16Array)).toBe(false)
  expect(fn(Int32Array)).toBe(false)
  expect(fn(Uint32Array)).toBe(false)
  expect(fn(Float32Array)).toBe(false)
  expect(fn(Float64Array)).toBe(false)

  expect(fn(Map)).toBe(false)
  expect(fn(Set)).toBe(false)
  expect(fn(WeakMap)).toBe(false)
  expect(fn(WeakSet)).toBe(false)

  expect(fn(ArrayBuffer)).toBe(false)
  //expect(fn(SharedArrayBuffer)).toBe(false)
  //expect(fn(Atomics)).toBe(false)
  expect(fn(DataView)).toBe(false)
  expect(fn(JSON)).toBe(false)

  expect(fn(Promise)).toBe(false)
  //expect(fn(Generator)).toBe(false)
  //expect(fn(GeneratorFunction)).toBe(false)
  //expect(fn(AsyncFunction)).toBe(false)

  expect(fn(Reflect)).toBe(false)
  expect(fn(Proxy)).toBe(false)
  expect(fn(Intl)).toBe(false)
  expect(fn(WebAssembly)).toBe(false)

  var f2 = new Foo()
  f2.constructor = Object
  expect(fn(f1)).toBe(false)
  expect(fn(f2)).toBe(false)
  expect(fn([])).toBe(false)
  expect(fn([1])).toBe(false)
  expect(fn({})).toBe(false)
  expect(fn({ a: 1 })).toBe(false)
  expect(fn(Object.create(null))).toBe(false)
  expect(fn('abc')).toBe(false)
  expect(fn(0)).toBe(false)
  expect(fn(1)).toBe(false)
  expect(fn(true)).toBe(false)
  expect(fn(false)).toBe(false)
  expect(fn(/a/g)).toBe(false)
  expect(fn(new RegExp('a', 'g'))).toBe(false)
  expect(fn(new Date())).toBe(false)
  expect(fn(arguments)).toBe(false)
})
