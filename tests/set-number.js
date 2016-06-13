const fn = require('../set-number')
const test = require('tape')

test('regular', function (t) {

  var n1 = new Number(12)
  var n2 = new Number(12.3)
  var n3 = new Number(-3)

  t.equal(fn(-1),   -1)
  t.equal(fn(0),     0)
  t.equal(fn(1),     1)
  t.equal(fn(n1),   12)
  t.equal(fn(n2), 12.3)
  t.equal(fn(n3),   -3)
  t.equal(fn(Number.POSITIVE_INFINITY),  Infinity)
  t.equal(fn(Number.NEGATIVE_INFINITY), -Infinity)
  t.end()
})

test('fallback', function (t) {

  var n1 = new Number(1)
  var n2 = new Number(-1)
  var n3 = new Number(NaN)
  var noop = function() {}

  t.equal(fn('a', null),   null)
  t.equal(fn(NaN, null),   null)
  t.equal(fn('a', -1),       -1)
  t.equal(fn('a', 0),         0)
  t.equal(fn('a', 1),         1)
  t.equal(fn('a'),            0)
  t.equal(fn('a', undefined), 0)
  t.equal(fn('a'),            0)
  t.equal(fn('a', 'b'),       0)
  t.equal(fn('a', NaN),       0)
  t.equal(fn('a', true),      0)
  t.equal(fn('a', false),     0)
  t.equal(fn('a', [1]),       0)
  t.equal(fn('a', {a:1}),     0)
  t.equal(fn('a', /./),       0)
  t.equal(fn('a', noop),      0)
  t.equal(fn('a', Math),      0)
  t.equal(fn('a', Math.max),  0)
  t.equal(fn('a', arguments), 0)
  t.equal(fn(NaN),            0)
  t.equal(fn(NaN, NaN),       0)
  t.equal(fn('a', n1),        1)
  t.equal(fn('a', n2),       -1)
  t.equal(fn('a', n3),        0)

  // fallback does not care of min max
  t.equal(fn('a', -1, 10),       -1)
  t.equal(fn('a', -1, 10, 20),   -1)
  t.end()
})

test('min max', function (t) {

  var n1 = new Number(10)
  var n2 = new Number(20)

  t.equal(fn(-1, 0, 10), 10)
  t.equal(fn(-1, 0, n1), 10)
  t.equal(fn(31, 0, 10, 20), 20)
  t.equal(fn(31, 0, n1, n2), 20)
  t.equal(fn(31, 0, n1, 20), 20)
  t.equal(fn(31, 0, 10, n2), 20)

  // inversed min max
  t.equal(fn(-1, 0, 20, 10), 10)
  t.equal(fn(31, 0, 20, 10), 20)
  t.equal(fn(-1, 0, n2, n1), 10)
  t.equal(fn(31, 0, n2, n1), 20)
  t.equal(fn(31, 0, n2, 10), 20)
  t.equal(fn(31, 0, 20, n1), 20)

  t.equal(fn(-1, 0, '10'),     -1)
  t.equal(fn(-1, 0, '10'),     -1)
  t.equal(fn(-1, 0, NaN),      -1)
  t.equal(fn(-1, 0, 10, '20'), 10)
  t.equal(fn(31, 0, 10, '20'), 31)
  t.equal(fn(31, 0, 10, NaN),  31)
  t.end()
})
