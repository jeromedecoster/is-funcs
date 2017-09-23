const fn = require('../is-object')

test('is-object', () => {
  expect(fn({})).toBe(true)
  expect(fn({ a: 1 })).toBe(true)
  expect(fn(new Object())).toBe(true)
  expect(fn(Object.create(null))).toBe(true)
  expect(fn(arguments)).toBe(true)

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
  expect(fn(Infinity)).toBe(false)
  expect(fn(NaN)).toBe(false)
  expect(fn(undefined)).toBe(false)
  expect(fn(null)).toBe(false)

  // some exceptions...
  // ok, technically, functions are objects
  // but we just want Object Like excluding functions
  expect(fn(function() {})).toBe(false)
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

  expect(fn(Promise)).toBe(false)
  //expect(fn(Generator)).toBe(false)
  //expect(fn(GeneratorFunction)).toBe(false)
  //expect(fn(AsyncFunction)).toBe(false)

  expect(fn(Proxy)).toBe(false)
  // ... end of exceptions

  // some special cases...
  // Math, JSON, Reflect, Intl and WebAssembly are typeof object === true
  expect(fn(Math)).toBe(true)
  expect(fn(JSON)).toBe(true)
  expect(fn(Reflect)).toBe(true)
  expect(fn(Intl)).toBe(true)
  expect(fn(WebAssembly)).toBe(true)
  // ... end of special cases

  var Foo = function() {}
  Foo.prototype.test = function() {}
  var f1 = new Foo()
  expect(fn(f1)).toBe(true)
  expect(fn(f1.test)).toBe(false)
  expect(fn([])).toBe(true)
  expect(fn([1])).toBe(true)
  expect(fn(1)).toBe(false)
  expect(fn(0)).toBe(false)
  expect(fn('abc')).toBe(false)
  expect(fn(true)).toBe(false)
  expect(fn(false)).toBe(false)
  expect(fn(/./)).toBe(true)
  expect(fn(new Int16Array())).toBe(true)
  expect(fn(Buffer.from('a'))).toBe(true)
  expect(fn(new Date())).toBe(true)
})

/*
test('is-object filled', () => {
  expect(fn({a:1}, true)).toBe(true)
  var o1 = new Object
  o1.a = 1
  expect(fn(o1, true)).toBe(true)
  var o2 = Object.create(null)
  o2.a = 1
  expect(fn(o2, true)).toBe(true)

  expect(fn({}, true)).toBe(false)
  expect(fn(new Object, true)).toBe(false)
  expect(fn(Object.create(null), true)).toBe(false)
})
*/
