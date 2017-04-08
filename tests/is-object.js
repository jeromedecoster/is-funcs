const fn = require('../is-object')

test('is-object default behavior', () => {
  expect(fn({})).toBe(true)
  expect(fn({a:1})).toBe(true)
  expect(fn(new Object)).toBe(true)
  expect(fn(Object.create(null))).toBe(true)

  // special case...
  // should be false, but technically arguments are plain object
  // so, ignored to speed up the function (~ x6)
  expect(fn(arguments)).toBe(true)
  // ...end of special case

  var Foo = function() {}
  Foo.prototype.test = function() {}
  var f1 = new Foo()
  expect(fn(f1)).toBe(false)
  expect(fn(f1.test)).toBe(false)
  expect(fn([])).toBe(false)
  expect(fn([1])).toBe(false)
  expect(fn(1)).toBe(false)
  expect(fn(0)).toBe(false)
  expect(fn('abc')).toBe(false)
  expect(fn(true)).toBe(false)
  expect(fn(false)).toBe(false)
  expect(fn(null)).toBe(false)
  expect(fn(undefined)).toBe(false)
  expect(fn(/./)).toBe(false)
  expect(fn(Math)).toBe(false)
  expect(fn(JSON)).toBe(false)
  expect(fn(Set)).toBe(false)
  expect(fn(Map)).toBe(false)
  expect(fn(Int16Array)).toBe(false)
  expect(fn(new Int16Array)).toBe(false)
  expect(fn(Buffer.from('a'))).toBe(false)
  expect(fn(function() {})).toBe(false)
  expect(fn(new Date)).toBe(false)
})

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
