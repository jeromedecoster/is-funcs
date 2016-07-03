const fn = require('../is-string')
const test = require('tape')

test('is-string default behavior', function (t) {

  // special case...
  // should be true, but nobody creates new String('abc')
  // so, ignored to speed up the function
  var s1 = new String('abc')
  t.deepEqual(fn(s1), false)
  // ...end of special case

  t.deepEqual(fn('abc'),     true)
  t.deepEqual(fn(' a '),     true)

  var s2 = new String('')
  var s3 = new String('  ')
  var noop = function() {}
  var o1 = new Object()
  o1.a = 2
  var o2 = Object.create(null)
  o2.a = 3
  var o3 = new Object()
  var o4 = Object.create(null)
  var b1 = new Boolean(true)
  var b2 = new Boolean(false)

  t.deepEqual(fn(b1),        false)
  t.deepEqual(fn(b2),        false)
  t.deepEqual(fn(s2),        false)
  t.deepEqual(fn(s3),        false)
  t.deepEqual(fn(''),        false)
  t.deepEqual(fn(' '),       false)
  t.deepEqual(fn({a:1}),     false)
  t.deepEqual(fn(o1),        false)
  t.deepEqual(fn(o2),        false)
  t.deepEqual(fn(o3),        false)
  t.deepEqual(fn(o4),        false)
  t.deepEqual(fn([]),        false)
  t.deepEqual(fn([1]),       false)
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

test('is-string check true', function (t) {

  // special case...
  // should be true, but nobody creates new String('abc') or new Boolean(true)
  // so, ignored to speed up the function
  var s1 = new String('abc')
  var b1 = new Boolean(true)
  t.deepEqual(fn(s1,    true), false)
  t.deepEqual(fn(s1,    b1),   false)
  t.deepEqual(fn('',    b1),   true)
  t.deepEqual(fn('   ', b1),   true)
  // ...end of special case

  t.deepEqual(fn('abc', true), true)
  t.deepEqual(fn('abc', b1),   true)
  t.deepEqual(fn(' a ', true), true)
  t.deepEqual(fn(' a ', b1),   true)

  var o1 = new Object()
  o1.a = 2
  var o2 = Object.create(null)
  o2.a = 3
  var o3 = new Object()
  var o4 = Object.create(null)
  var noop = function() {}
  var s2 = new String('')
  var s3 = new String('  ')

  t.deepEqual(fn('',        true), false)
  t.deepEqual(fn('   ',     true), false)
  t.deepEqual(fn(s2,        true), false)
  t.deepEqual(fn(s3,        true), false)
  t.deepEqual(fn({a:1},     true), false)
  t.deepEqual(fn(o1,        true), false)
  t.deepEqual(fn(o2,        true), false)
  t.deepEqual(fn(o3,        true), false)
  t.deepEqual(fn(o4,        true), false)
  t.deepEqual(fn([],        true), false)
  t.deepEqual(fn([1],       true), false)
  t.deepEqual(fn(12,        true), false)
  t.deepEqual(fn(0,         true), false)
  t.deepEqual(fn(NaN,       true), false)
  t.deepEqual(fn(Number.POSITIVE_INFINITY), false)
  t.deepEqual(fn(Number.NEGATIVE_INFINITY), false)
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

test('is-string check false', function (t) {

  // special case...
  // should be true, but nobody creates new String('abc') or new Boolean(true)
  // so, ignored to speed up the function
  var s1 = new String('abc')
  var s2 = new String('')
  var s3 = new String('  ')
  var b1 = new Boolean(false)
  t.deepEqual(fn(s1,    false), false)
  t.deepEqual(fn(s1,    b1),    false)
  t.deepEqual(fn(s2,    false), false)
  t.deepEqual(fn(s2,    b1),    false)
  t.deepEqual(fn(s3,    false), false)
  t.deepEqual(fn(s3,    b1),    false)
  // ...end of special case

  t.deepEqual(fn('abc', false), true)
  t.deepEqual(fn('abc', b1),    true)
  t.deepEqual(fn(' a ', false), true)
  t.deepEqual(fn(' a ', b1),    true)
  t.deepEqual(fn('',    false), true)
  t.deepEqual(fn('',    b1),    true)
  t.deepEqual(fn('   ', false), true)
  t.deepEqual(fn('   ', b1),    true)

  var o1 = new Object()
  o1.a = 2
  var o2 = Object.create(null)
  o2.a = 3
  var o3 = new Object()
  var o4 = Object.create(null)
  var noop = function() {}

  t.deepEqual(fn({a:1},     false), false)
  t.deepEqual(fn(o1,        false), false)
  t.deepEqual(fn(o2,        false), false)
  t.deepEqual(fn(o3,        false), false)
  t.deepEqual(fn(o4,        false), false)
  t.deepEqual(fn([],        false), false)
  t.deepEqual(fn([1],       false), false)
  t.deepEqual(fn(12,        false), false)
  t.deepEqual(fn(0,         false), false)
  t.deepEqual(fn(NaN,       false), false)
  t.deepEqual(fn(Number.POSITIVE_INFINITY), false)
  t.deepEqual(fn(Number.NEGATIVE_INFINITY), false)
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

test('is-string safe true', function (t) {

  var s1 = new String('abc')
  var s2 = new String('')
  var s3 = new String('  ')

  // the end of special case for new String('abc')
  t.deepEqual(fn(null, true,  true), false)
  t.deepEqual(fn(null, false, true), false)
  t.deepEqual(fn(s1, true,  true), true)
  t.deepEqual(fn(s1, false, true), true)
  t.deepEqual(fn(s2, true,  true), false)
  t.deepEqual(fn(s2, false, true), true)
  t.deepEqual(fn(s3, true,  true), false)
  t.deepEqual(fn(s3, false, true), true)
  t.end()
})