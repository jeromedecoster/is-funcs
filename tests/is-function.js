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

  var f2 = new Foo()
  f2.constructor = Object
  expect(fn(f1)).toBe(false)
  expect(fn(f2)).toBe(false)
  expect(fn([])).toBe(false)
  expect(fn([1])).toBe(false)
  expect(fn({})).toBe(false)
  expect(fn({a:1})).toBe(false)
  expect(fn(Object.create(null))).toBe(false)
  expect(fn('abc')).toBe(false)
  expect(fn(0)).toBe(false)
  expect(fn(1)).toBe(false)
  expect(fn(true)).toBe(false)
  expect(fn(false)).toBe(false)
  expect(fn(null)).toBe(false)
  expect(fn(undefined)).toBe(false)
  expect(fn(NaN)).toBe(false)
  expect(fn(Infinity)).toBe(false)
  expect(fn(/./)).toBe(false)
  expect(fn(Math)).toBe(false)
  expect(fn(JSON)).toBe(false)
  expect(fn(new Date)).toBe(false)
  expect(fn(arguments)).toBe(false)
})
