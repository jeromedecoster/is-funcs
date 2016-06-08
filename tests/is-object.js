const fn = require('../is-object')
const test = require('tape')

test('default behavior', function (t) {

  var o1 = new Object()
  o1.a = 2
  var o2 = Object.create(null)
  o2.a = 3

  t.deepEqual(fn({a:1}), true)
  t.deepEqual(fn(o1),    true)
  t.deepEqual(fn(o2),    true)

  var noop = function() {}
  var o3 = new Object()
  var o4 = Object.create(null)
  var s1 = new String('abc')
  var s2 = new String('')
  var s3 = new String('  ')
  var Foo = function() {}
  Foo.prototype.test = function() {}
  var f1 = new Foo()
  var n1 = new Number(12)
  var n2 = new Number(12.3)
  var n3 = new Number(NaN)

  t.deepEqual(fn(n1),        false)
  t.deepEqual(fn(n2),        false)
  t.deepEqual(fn(n3),        false)
  t.deepEqual(fn(f1),        false)
  t.deepEqual(fn(f1.test),   false)
  t.deepEqual(fn(Foo.prototype.test), false)
  t.deepEqual(fn(o3),        false)
  t.deepEqual(fn(o4),        false)
  t.deepEqual(fn(s1),        false)
  t.deepEqual(fn(s2),        false)
  t.deepEqual(fn(s3),        false)
  t.deepEqual(fn([]),        false)
  t.deepEqual(fn([1]),       false)
  t.deepEqual(fn('abc'),     false)
  t.deepEqual(fn(12),        false)
  t.deepEqual(fn(0),         false)
  t.deepEqual(fn(NaN),       false)
  t.deepEqual(fn(Number.POSITIVE_INFINITY), false)
  t.deepEqual(fn(Number.NEGATIVE_INFINITY), false)
  t.deepEqual(fn(/./),       false)
  t.deepEqual(fn(true),      false)
  t.deepEqual(fn(false),     false)
  t.deepEqual(fn(null),      false)
  t.deepEqual(fn(undefined), false)
  t.deepEqual(fn(),          false)
  t.deepEqual(fn(noop),      false)
  t.deepEqual(fn(Math),      false)
  t.deepEqual(fn(new Date),  false)
  t.deepEqual(fn(arguments), false)
  t.end()
})

test('check true', function (t) {

  var o1 = new Object()
  o1.a = 2
  var o2 = Object.create(null)
  o2.a = 3

  t.deepEqual(fn({a:1}, true), true)
  t.deepEqual(fn(o1,    true), true)
  t.deepEqual(fn(o2,    true), true)

  var noop = function() {}
  var s1 = new String('abc')
  var s2 = new String('')
  var s3 = new String('  ')

  var o3 = new Object()
  var o4 = Object.create(null)
  t.deepEqual(fn(o3,        true), false)
  t.deepEqual(fn(o4,        true), false)
  t.deepEqual(fn(s1,        true), false)
  t.deepEqual(fn(s2,        true), false)
  t.deepEqual(fn(s3,        true), false)
  t.deepEqual(fn([],        true), false)
  t.deepEqual(fn([1],       true), false)
  t.deepEqual(fn('abc',     true), false)
  t.deepEqual(fn(12,        true), false)
  t.deepEqual(fn(0,         true), false)
  t.deepEqual(fn(NaN,       true), false)
  t.deepEqual(fn(Number.POSITIVE_INFINITY), false)
  t.deepEqual(fn(Number.NEGATIVE_INFINITY), false)
  t.deepEqual(fn(/./,       true), false)
  t.deepEqual(fn(true,      true), false)
  t.deepEqual(fn(false,     true), false)
  t.deepEqual(fn(null,      true), false)
  t.deepEqual(fn(undefined, true), false)
  t.deepEqual(fn(noop,      true), false)
  t.deepEqual(fn(Math,      true), false)
  t.deepEqual(fn(new Date,  true), false)
  t.deepEqual(fn(arguments, true), false)
  t.end()
})

test('check false', function (t) {

  var o1 = new Object()
  o1.a = 2
  var o2 = Object.create(null)
  o2.a = 3
  var o3 = new Object()
  var o4 = Object.create(null)

  t.deepEqual(fn({a:1}, false), true)
  t.deepEqual(fn(o1,    false), true)
  t.deepEqual(fn(o2,    false), true)
  t.deepEqual(fn(o3,    false), true)
  t.deepEqual(fn(o4,    false), true)

  var noop = function() {}
  var s1 = new String('abc')
  var s2 = new String('')
  var s3 = new String('  ')

  t.deepEqual(fn(s1,        false), false)
  t.deepEqual(fn(s2,        false), false)
  t.deepEqual(fn(s3,        false), false)
  t.deepEqual(fn([],        false), false)
  t.deepEqual(fn([1],       false), false)
  t.deepEqual(fn('abc',     false), false)
  t.deepEqual(fn(12,        false), false)
  t.deepEqual(fn(0,         false), false)
  t.deepEqual(fn(NaN,       false), false)
  t.deepEqual(fn(Number.POSITIVE_INFINITY), false)
  t.deepEqual(fn(Number.NEGATIVE_INFINITY), false)
  t.deepEqual(fn(/./,       false), false)
  t.deepEqual(fn(true,      false), false)
  t.deepEqual(fn(false,     false), false)
  t.deepEqual(fn(null,      false), false)
  t.deepEqual(fn(undefined, false), false)
  t.deepEqual(fn(noop,      false), false)
  t.deepEqual(fn(Math,      false), false)
  t.deepEqual(fn(new Date,  false), false)
  t.deepEqual(fn(arguments, false), false)
  t.end()
})
