const fn = require('../is-integer')
const test = require('tape')

test('is-integer default behavior', function (t) {

  // special case...
  // should be true, but nobody creates new Number(12)
  // so, ignored to speed up the function
  var n1 = new Number(12)
  t.equal(fn(n1), false)
  // ...end of special case

  t.equal(fn(12),        true)
  t.equal(fn(-1),        true)
  t.equal(fn(0),         true)
  t.equal(fn(-0),        true)
  t.equal(fn(1),                        true, '1')
  t.equal(fn(12),                       true, '12')
  t.equal(fn(123),                      true, '123')
  t.equal(fn(1234),                     true, '1234')
  t.equal(fn(12345),                    true, '12345')
  t.equal(fn(123456),                   true, '123456')
  t.equal(fn(1234567),                  true, '1234567')
  t.equal(fn(12345678),                 true, '12345678')
  t.equal(fn(123456789),                true, '123456789')
  t.equal(fn(1234567890),               true, '1234567890')
  // should be true, but JS is not always your friend...
  t.equal(fn(12345678900),              false, '12345678900')
  t.equal(fn(123456789000),             false, '123456789000')
  t.equal(fn(1234567890000),            false, '1234567890000')
  t.equal(fn(12345678900000),           false, '12345678900000')
  t.equal(fn(123456789000000),          false, '123456789000000')
  t.equal(fn(1234567890000000),         false, '1234567890000000')
  t.equal(fn(12345678900000000),        false, '12345678900000000')
  t.equal(fn(123456789000000000),       false, '123456789000000000')
  t.equal(fn(1234567890000000000),      false, '1234567890000000000')
  t.equal(fn(12345678900000000000),     false, '12345678900000000000')
  t.equal(fn(123456789000000000000),    false, '123456789000000000000')
  t.equal(fn(1234567890000000000000),   false, '1234567890000000000000')
  t.equal(fn(12345678900000000000000),  false, '12345678900000000000000')
  // ...back to normal
  t.equal(fn(Number.POSITIVE_INFINITY), true)
  t.equal(fn(Number.NEGATIVE_INFINITY), true)

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
  var n2 = new Number(12.3)
  var n3 = new Number(NaN)
  var b1 = new Boolean(true)
  var b2 = new Boolean(false)

  t.equal(fn(b1),        false)
  t.equal(fn(b2),        false)
  t.equal(fn(n2),        false)
  t.equal(fn(n3),        false)
  t.equal(fn(-1.1),      false)
  t.equal(fn(1.1),                             false, '1.1')
  t.equal(fn(1.01),                            false, '1.01')
  t.equal(fn(1.001),                           false, '1.001')
  t.equal(fn(1.0001),                          false, '1.0001')
  t.equal(fn(1.00001),                         false, '1.00001')
  t.equal(fn(1.000001),                        false, '1.000001')
  t.equal(fn(1.0000001),                       false, '1.0000001')
  t.equal(fn(1.00000001),                      false, '1.00000001')
  t.equal(fn(1.000000001),                     false, '1.000000001')
  t.equal(fn(1.0000000001),                    false, '1.0000000001')
  t.equal(fn(1.00000000001),                   false, '1.00000000001')
  t.equal(fn(1.000000000001),                  false, '1.000000000001')
  t.equal(fn(1.0000000000001),                 false, '1.0000000000001')
  t.equal(fn(1.00000000000001),                false, '1.00000000000001')
  t.equal(fn(1.000000000000001),               false, '1.000000000000001')
  t.equal(fn(10.000000000000001),              false, '10.000000000000001')
  // should be false, but JS is not always your friend...
  t.equal(fn(100.000000000000001),             true, '100.000000000000001')
  t.equal(fn(1000.000000000000001),            true, '1000.000000000000001')
  t.equal(fn(10000.000000000000001),           true, '10000.000000000000001')
  t.equal(fn(100000.000000000000001),          true, '100000.000000000000001')
  t.equal(fn(1000000.000000000000001),         true, '1000000.000000000000001')
  t.equal(fn(10000000.000000000000001),        true, '10000000.000000000000001')
  t.equal(fn(100000000.000000000000001),       true, '100000000.000000000000001')
  t.equal(fn(1000000000.000000000000001),      true, '1000000000.000000000000001')
  // ...back to normal
  t.equal(fn(10000000000.000000000000001),     false, '10000000000.000000000000001')
  t.equal(fn(100000000000.000000000000001),    false, '100000000000.000000000000001')
  t.equal(fn(1000000000000.000000000000001),   false, '1000000000000.000000000000001')
  t.equal(fn(10000000000000.000000000000001),  false, '10000000000000.000000000000001')
  t.equal(fn(100000000000000.000000000000001), false, '100000000000000.000000000000001')
  t.equal(fn(100000000000000.00000000000001),  false, '100000000000000.00000000000001')
  t.equal(fn(100000000000000.0000000000001),   false, '100000000000000.0000000000001')
  t.equal(fn(100000000000000.000000000001),    false, '100000000000000.000000000001')
  t.equal(fn(100000000000000.00000000001),     false, '100000000000000.00000000001')
  t.equal(fn(100000000000000.0000000001),      false, '100000000000000.0000000001')
  t.equal(fn(100000000000000.000000001),       false, '100000000000000.000000001')
  t.equal(fn(100000000000000.00000001),        false, '100000000000000.00000001')
  t.equal(fn(100000000000000.0000001),         false, '100000000000000.0000001')
  t.equal(fn(100000000000000.000001),          false, '100000000000000.000001')
  t.equal(fn(100000000000000.00001),           false, '100000000000000.00001')
  t.equal(fn(100000000000000.0001),            false, '100000000000000.0001')
  t.equal(fn(100000000000000.001),             false, '100000000000000.001')
  t.equal(fn(100000000000000.01),              false, '100000000000000.01')
  t.equal(fn(NaN),       false)
  t.equal(fn(true),      false)
  t.equal(fn(false),     false)
  t.equal(fn([1]),       false)
  t.equal(fn(a1),        false)
  t.equal(fn(a2),        false)
  t.equal(fn([]),        false)
  t.equal(fn('abc'),     false)
  t.equal(fn(' a '),     false)
  t.equal(fn(''),        false)
  t.equal(fn(' '),       false)
  t.equal(fn({a:1}),     false)
  t.equal(fn(o1),        false)
  t.equal(fn(o2),        false)
  t.equal(fn(o3),        false)
  t.equal(fn(o4),        false)
  t.equal(fn(s1),        false)
  t.equal(fn(s2),        false)
  t.equal(fn(s3),        false)
  t.equal(fn(/./),       false)
  t.equal(fn(null),      false)
  t.equal(fn(undefined), false)
  t.equal(fn(),          false)
  t.equal(fn(noop),      false)
  t.equal(fn(Math),      false)
  t.equal(fn(new Date),  false)
  t.equal(fn(arguments), false)
  t.end()
})

test('is-integer safe true', function (t) {

  // the end of special case for new Number(2)
  var n1 = new Number(12)
  var n2 = new Number(12.3)
  var n3 = new Number(NaN)
  var n4 = new Number(Infinity)
  var n5 = new Number(-Infinity)
  t.equal(fn(null, true), false)
  t.equal(fn(n1,   true), true)
  t.equal(fn(n2,   true), false)
  t.equal(fn(n3,   true), false)
  t.equal(fn(n4,   true), true)
  t.equal(fn(n5,   true), true)

  t.end()
})
