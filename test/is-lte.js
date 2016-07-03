const fn = require('../is-lte')
const test = require('tape')

test('is-lte default behavior', function (t) {

  // special case...
  // should be true, but nobody creates new Number(2)
  // so, ignored to speed up the function
  var n1 = new Number(2)
  var n2 = new Number(2)
  t.deepEqual(fn(n1, n2), false)
  // ...end of special case

  t.deepEqual(fn(2, 2),     true)
  t.deepEqual(fn(-1, 2),    true)
  t.deepEqual(fn(-1.1, 2),  true)
  t.deepEqual(fn(-0.01, 2), true)
  t.deepEqual(fn(0.01, 2),  true)
  t.deepEqual(fn(0, 2),     true)
  t.deepEqual(fn(1, 2),     true)
  t.deepEqual(fn(1.1, 2),   true)
  t.deepEqual(fn(-0, 2),    true)
  t.deepEqual(fn(Number.NEGATIVE_INFINITY, 2), true)

  var a1 = new Array(1)
  var a2 = new Array(0)
  var o1 = new Object()
  o1.a = 2
  var o2 = Object.create(null)
  o2.a = 3
  var o3 = new Object()
  var o4 = Object.create(null)
  var noop = function() {}
  var s1 = new String('abc')
  var s2 = new String('')
  var s3 = new String('  ')
  var n3 = new Number(-1)
  var n4 = new Number(-2)
  var n5 = new Number(NaN)
  var b1 = new Boolean(true)
  var b2 = new Boolean(false)

  t.deepEqual(fn(n3, n4),        false)
  t.deepEqual(fn(n3, n5),        false)
  t.deepEqual(fn(-1, -2),        false)
  t.deepEqual(fn(NaN, NaN),      false)
  t.deepEqual(fn(-1, NaN),       false)
  t.deepEqual(fn(-1.1, {}),      false)
  t.deepEqual(fn(-0.01, []),     false)
  t.deepEqual(fn(0.01, ''),      false)
  t.deepEqual(fn(0, /./),        false)
  t.deepEqual(fn(1, noop),       false)
  t.deepEqual(fn(1.1, null),     false)
  t.deepEqual(fn(-0, undefined), false)
  t.deepEqual(fn(Number.NEGATIVE_INFINITY), false)

  t.deepEqual(fn(b1, 2),        false)
  t.deepEqual(fn(b2, 2),        false)
  t.deepEqual(fn(12, b1),       false)
  t.deepEqual(fn(12, b2),       false)
  t.deepEqual(fn(12, 2),        false)
  t.deepEqual(fn(Number.POSITIVE_INFINITY, 2), false)
  t.deepEqual(fn(NaN, 2),       false)
  t.deepEqual(fn(true, 2),      false)
  t.deepEqual(fn(false, 2),     false)
  t.deepEqual(fn([1], 2),       false)
  t.deepEqual(fn(a1, 2),        false)
  t.deepEqual(fn(a2, 2),        false)
  t.deepEqual(fn([], 2),        false)
  t.deepEqual(fn('abc', 2),     false)
  t.deepEqual(fn(' a ', 2),     false)
  t.deepEqual(fn('', 2),        false)
  t.deepEqual(fn(' ', 2),       false)
  t.deepEqual(fn({a:1}, 2),     false)
  t.deepEqual(fn(o1, 2),        false)
  t.deepEqual(fn(o2, 2),        false)
  t.deepEqual(fn(o3, 2),        false)
  t.deepEqual(fn(o4, 2),        false)
  t.deepEqual(fn(s1, 2),        false)
  t.deepEqual(fn(s2, 2),        false)
  t.deepEqual(fn(s3, 2),        false)
  t.deepEqual(fn(/./, 2),       false)
  t.deepEqual(fn(null, 2),      false)
  t.deepEqual(fn(undefined, 2), false)
  t.deepEqual(fn(),             false)
  t.deepEqual(fn(noop, 2),      false)
  t.deepEqual(fn(Math, 2),      false)
  t.deepEqual(fn(new Date),     false)
  t.deepEqual(fn(arguments, 2), false)
  t.end()
})

test('is-lte safe true', function (t) {

  // the end of special case for new Number(2)
  var n1 = new Number(2)
  var n2 = new Number(2)
  var n3 = new Number(NaN)
  t.deepEqual(fn(n1, n2, true), true)
  t.deepEqual(fn(n1, n2, true), true)
  t.deepEqual(fn(n1, n3, true), false)
  t.deepEqual(fn(n3, n1, true), false)

  t.end()
})