const fn = require('../is-boolean')
const test = require('tape')

test('is-boolean default behavior', function (t) {

  // special case...
  // should be true, but nobody creates new Boolean(true)
  // so, ignored to speed up the function
  var b1 = new Boolean(true)
  var b2 = new Boolean(false)
  t.deepEqual(fn(b1), false)
  t.deepEqual(fn(b2), false)
  // ...end of special case

  t.deepEqual(fn(true),  true)
  t.deepEqual(fn(false), true)

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

  t.deepEqual(fn([1]),       false)
  t.deepEqual(fn(a1),        false)
  t.deepEqual(fn(a2),        false)
  t.deepEqual(fn([]),        false)
  t.deepEqual(fn('abc'),     false)
  t.deepEqual(fn(' a '),     false)
  t.deepEqual(fn(''),        false)
  t.deepEqual(fn(' '),       false)
  t.deepEqual(fn({a:1}),     false)
  t.deepEqual(fn(o1),        false)
  t.deepEqual(fn(o2),        false)
  t.deepEqual(fn(o3),        false)
  t.deepEqual(fn(o4),        false)
  t.deepEqual(fn(s1),        false)
  t.deepEqual(fn(s2),        false)
  t.deepEqual(fn(s3),        false)
  t.deepEqual(fn(12),        false)
  t.deepEqual(fn(-1.1),      false)
  t.deepEqual(fn(-1),        false)
  t.deepEqual(fn(0),         false)
  t.deepEqual(fn(1),         false)
  t.deepEqual(fn(1.1),       false)
  t.deepEqual(fn(NaN),       false)
  t.deepEqual(fn(Number.POSITIVE_INFINITY), false)
  t.deepEqual(fn(Number.NEGATIVE_INFINITY), false)
  t.deepEqual(fn(/./),       false)
  t.deepEqual(fn(null),      false)
  t.deepEqual(fn(undefined), false)
  t.deepEqual(fn(),          false)
  t.deepEqual(fn(noop),      false)
  t.deepEqual(fn(Math),      false)
  t.deepEqual(fn(new Date),  false)
  t.deepEqual(fn(arguments), false)
  t.end()
})

test('is-boolean safe true', function (t) {

  // the end of special case for new Boolean(true)
  var b1 = new Boolean(true)
  var b2 = new Boolean(false)
  t.deepEqual(fn(null, true), false)
  t.deepEqual(fn(b1,   true), true)
  t.deepEqual(fn(b2,   true), true)
  t.end()
})
