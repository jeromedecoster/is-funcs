const fn = require('../set-boolean')
const test = require('tape')

test('regular', function (t) {

  var b1 = new Boolean(true)
  var b2 = new Boolean(false)

  t.equal(fn(true),      true)
  t.equal(fn(false),     false)
  t.equal(fn(b1),        true)
  t.equal(fn(b2),        false)

  t.equal(fn(null),      false)
  t.equal(fn(undefined), false)
  t.equal(fn(),          false)
  t.equal(fn(1),         false)
  t.equal(fn('a'),       false)
  t.equal(fn([1]),       false)
  t.equal(fn({a:1}),     false)
  t.end()
})

test('fallback', function (t) {

  var b1 = new Boolean(true)
  var b2 = new Boolean(false)

  t.equal(fn(true, false),     true)
  t.equal(fn(true, b2),        true)
  t.equal(fn(false, true),     false)
  t.equal(fn(false, b1),       false)
  t.equal(fn(true, null),      true)
  t.equal(fn(true, undefined), true)

  t.equal(fn('a', null),       null)
  t.equal(fn('a', undefined),  false)
  t.equal(fn('a', 1),          false)
  t.equal(fn('a', 'a'),        false)
  t.equal(fn('a', [1]),        false)
  t.equal(fn('a', {a:1}),      false)
  t.equal(fn('a', false),      false)
  t.equal(fn('a', b2),         false)
  t.equal(fn('a', true),       true)
  t.end()
})
