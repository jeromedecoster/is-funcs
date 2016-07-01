const fn = require('../is-object')
const test = require('tape')

test('is-object default behavior', function (t) {

  // special case...
  // should be false, but technically arguments are plain object
  // so, ignored to speed up the function (~ x6)
  t.deepEqual(fn(arguments), true)
  // ...end of special case

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
  var b1 = new Boolean(true)
  var b2 = new Boolean(false)

  t.deepEqual(fn(b1),        false)
  t.deepEqual(fn(b2),        false)
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
  t.deepEqual(fn(Boolean),   false)
  t.deepEqual(fn(Math),      false)
  t.deepEqual(fn(Object),    false)
  t.deepEqual(fn(Function),  false)
  t.deepEqual(fn(String),    false)
  t.deepEqual(fn(RegExp),    false)
  t.deepEqual(fn(Symbol),    false)
  t.deepEqual(fn(Error),     false)
  t.deepEqual(fn(Number),    false)
  t.deepEqual(fn(Date),      false)
  t.deepEqual(fn(Array),     false)
  t.deepEqual(fn(Int8Array), false)
  t.deepEqual(fn(Map),       false)
  t.deepEqual(fn(Set),       false)
  t.deepEqual(fn(WeakMap),   false)
  t.deepEqual(fn(JSON),      false)
  t.deepEqual(fn(Promise),   false)
  t.deepEqual(fn(new Date),  false)
  t.deepEqual(fn(ArrayBuffer), false)
  t.end()
})

test('is-object check true', function (t) {

  // special case...
  // should be false, but technically arguments are plain object
  // so, ignored to speed up the function (~ x6)
  t.deepEqual(fn(arguments, true), true)
  // ...end of special case

  var o1 = new Object()
  o1.a = 2
  var o2 = Object.create(null)
  o2.a = 3
  var o3 = new Object()
  var o4 = Object.create(null)

  // special case...
  // should be false, but nobody creates new Boolean(true)
  // so, ignored to speed up the function
  var b1 = new Boolean(true)
  t.deepEqual(fn(o3, b1), true)
  t.deepEqual(fn(o4, b1), true)
  // ...end of special case

  t.deepEqual(fn({a:1}, true), true)
  t.deepEqual(fn({a:1}, b1),   true)
  t.deepEqual(fn(o1,    true), true)
  t.deepEqual(fn(o1,    b1),   true)
  t.deepEqual(fn(o2,    true), true)
  t.deepEqual(fn(o2,    b1),   true)

  var noop = function() {}
  var s1 = new String('abc')
  var s2 = new String('')
  var s3 = new String('  ')

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

  t.end()
})

test('is-object check false', function (t) {

  // special case...
  // should be false, but technically arguments are plain object
  // so, ignored to speed up the function (~ x6)
  t.deepEqual(fn(arguments, false), true)
  // ...end of special case

  var o1 = new Object()
  o1.a = 2
  var o2 = Object.create(null)
  o2.a = 3
  var o3 = new Object()
  var o4 = Object.create(null)
  var b1 = new Boolean(false)

  t.deepEqual(fn({a:1}, false), true)
  t.deepEqual(fn({a:1}, b1),    true)
  t.deepEqual(fn(o1,    false), true)
  t.deepEqual(fn(o1,    b1),    true)
  t.deepEqual(fn(o2,    false), true)
  t.deepEqual(fn(o2,    b1),    true)
  t.deepEqual(fn(o3,    false), true)
  t.deepEqual(fn(o3,    b1),    true)
  t.deepEqual(fn(o4,    false), true)
  t.deepEqual(fn(o4,    b1),    true)

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
  t.deepEqual(fn(Boolean,   false), false)
  t.deepEqual(fn(Math,      false), false)
  t.deepEqual(fn(Object,    false), false)
  t.deepEqual(fn(Function,  false), false)
  t.deepEqual(fn(new Date,  false), false)
  t.end()
})

test('is-object safe true', function (t) {

  // the end of special case for arguments
  t.deepEqual(fn(null, true,  true), false)
  t.deepEqual(fn(null, false, true), false)
  t.deepEqual(fn(Math, true,  true), false)
  t.deepEqual(fn(Math, false, true), false)
  t.deepEqual(fn(arguments, true,  true), false)
  t.deepEqual(fn(arguments, false, true), false)
  t.end()
})
