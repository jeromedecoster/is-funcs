const fn = require('../is-number')
const test = require('tape')

test('is-number with single argument', {skip: false}, t => {
  // return `true`
  t.true(fn(-1.1), 'isNumber(-1.1) → true')
  t.true(fn(-1), 'isNumber(-1) → true')
  t.true(fn(0), 'isNumber(0) → true')
  t.true(fn(1), 'isNumber(1) → true')
  t.true(fn(1.1), 'isNumber(1.1) → true')
  t.true(fn(-Infinity), 'isNumber(-Infinity) → true')
  t.true(fn(Infinity), 'isNumber(Infinity) → true')
  
  // special case...
  // should + or - be true, but nobody creates `new Number()`
  // so, ignored to speed up the function
  t.false(fn(new Number(12)), 'isNumber(new Number(12)) → false')
  t.false(fn(new Number(12.3)), 'isNumber(new Number(12.3)) → false')
  t.false(fn(new Number(NaN)), 'isNumber(new Number(NaN)) → false')

  // return `false`
  t.false(fn(), 'isNumber() → false')
  t.false(fn([]), 'isNumber([]) → false')
  t.false(fn([0]), 'isNumber([0]) → false')
  t.false(fn({}), 'isNumber({}) → false')
  t.false(fn({a:1}), 'isNumber({a:1}) → false')
  t.false(fn(function() {}), 'isNumber(function() {}) → false')
  t.false(fn(""), 'isNumber("") → false')
  t.false(fn(" "), 'isNumber(" ") → false')
  t.false(fn("a"), 'isNumber("a") → false')
  t.false(fn("1"), 'isNumber("1") → false')
  t.false(fn(/./), 'isNumber(/./) → false')
  t.false(fn(false), 'isNumber(false) → false')
  t.false(fn(true), 'isNumber(true) → false')
  t.false(fn(null), 'isNumber(null) → false')
  t.false(fn(undefined), 'isNumber(undefined) → false')
  t.false(fn(Math), 'isNumber(Math) → false')
  t.false(fn(new Date()), 'isNumber(new Date()) → false')
  t.false(fn(arguments), 'isNumber(arguments) → false')
  t.end()
})

test('is-number with multiple arguments', t => {
  // return `true`
  t.true(fn(-1.1, 0 , 1), 'isNumber(-1.1, 0 , 1) → true')

  // return `false`
  t.false(fn(-1.1, 0 , "1"), 'isNumber(-1.1, 0 , "1") → false')
  t.false(fn(-1.1, 0 , NaN), 'isNumber(-1.1, 0 , NaN) → false')
  t.false(fn(-1.1, 0 , undefined), 'isNumber(-1.1, 0 , undefined) → false')
  t.end()
})
