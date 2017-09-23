const fn = require('../is-integer')

test('is-integer', () => {
  expect(fn(-1)).toBe(true)
  expect(fn(0)).toBe(true)
  expect(fn(1)).toBe(true)
  expect(fn(12)).toBe(true)
  expect(fn(123)).toBe(true)
  expect(fn(1234)).toBe(true)
  expect(fn(12345)).toBe(true)
  expect(fn(123456)).toBe(true)
  expect(fn(1234567)).toBe(true)
  expect(fn(12345678)).toBe(true)
  expect(fn(123456789)).toBe(true)
  expect(fn(1234567890)).toBe(true)
  // should be true, but JS is not always your friend...
  expect(fn(12345678900)).toBe(false)
  expect(fn(123456789000)).toBe(false)
  expect(fn(1234567890000)).toBe(false)
  expect(fn(12345678900000)).toBe(false)
  expect(fn(123456789000000)).toBe(false)
  expect(fn(1234567890000000)).toBe(false)
  expect(fn(12345678900000000)).toBe(false)
  expect(fn(123456789000000000)).toBe(false)
  expect(fn(1234567890000000000)).toBe(false)
  expect(fn(12345678900000000000)).toBe(false)
  expect(fn(123456789000000000000)).toBe(false)
  expect(fn(1234567890000000000000)).toBe(false)
  expect(fn(12345678900000000000000)).toBe(false)
  // ...back to normal
  expect(fn(-Infinity)).toBe(true)
  expect(fn(Infinity)).toBe(true)

  expect(fn(-1.1)).toBe(false)
  expect(fn(1.1)).toBe(false)
  expect(fn(1.01)).toBe(false)
  expect(fn(1.001)).toBe(false)
  expect(fn(1.0001)).toBe(false)
  expect(fn(1.00001)).toBe(false)
  expect(fn(1.000001)).toBe(false)
  expect(fn(1.0000001)).toBe(false)
  expect(fn(1.00000001)).toBe(false)
  expect(fn(1.000000001)).toBe(false)
  expect(fn(1.0000000001)).toBe(false)
  expect(fn(1.00000000001)).toBe(false)
  expect(fn(1.000000000001)).toBe(false)
  expect(fn(1.0000000000001)).toBe(false)
  expect(fn(1.00000000000001)).toBe(false)
  expect(fn(1.000000000000001)).toBe(false)
  expect(fn(10.000000000000001)).toBe(false)
  // should be false, but JS is not always your friend...
  expect(fn(100.000000000000001)).toBe(true)
  expect(fn(1000.000000000000001)).toBe(true)
  expect(fn(10000.000000000000001)).toBe(true)
  expect(fn(100000.000000000000001)).toBe(true)
  expect(fn(1000000.000000000000001)).toBe(true)
  expect(fn(10000000.000000000000001)).toBe(true)
  expect(fn(100000000.000000000000001)).toBe(true)
  expect(fn(1000000000.000000000000001)).toBe(true)
  // ...back to normal
  expect(fn(10000000000.000000000000001)).toBe(false)
  expect(fn(100000000000.000000000000001)).toBe(false)
  expect(fn(1000000000000.000000000000001)).toBe(false)
  expect(fn(10000000000000.000000000000001)).toBe(false)
  expect(fn(100000000000000.000000000000001)).toBe(false)
  expect(fn(100000000000000.00000000000001)).toBe(false)
  expect(fn(100000000000000.0000000000001)).toBe(false)
  expect(fn(100000000000000.000000000001)).toBe(false)
  expect(fn(100000000000000.00000000001)).toBe(false)
  expect(fn(100000000000000.0000000001)).toBe(false)
  expect(fn(100000000000000.000000001)).toBe(false)
  expect(fn(100000000000000.00000001)).toBe(false)
  expect(fn(100000000000000.0000001)).toBe(false)
  expect(fn(100000000000000.000001)).toBe(false)
  expect(fn(100000000000000.00001)).toBe(false)
  expect(fn(100000000000000.0001)).toBe(false)
  expect(fn(100000000000000.001)).toBe(false)
  expect(fn(100000000000000.01)).toBe(false)

  expect(fn(NaN)).toBe(false)
  expect(fn(new Number(12))).toBe(false)

  expect(fn({})).toBe(false)
  expect(fn(Object.create(null))).toBe(false)
  expect(fn('abc')).toBe(false)
  expect(fn(true)).toBe(false)
  expect(fn(false)).toBe(false)
  expect(fn(null)).toBe(false)
  expect(fn(undefined)).toBe(false)
  expect(fn(/./)).toBe(false)
  expect(fn(Math)).toBe(false)
  expect(fn(JSON)).toBe(false)
  expect(fn(function() {})).toBe(false)
  expect(fn(new Date())).toBe(false)
  expect(fn(arguments)).toBe(false)
})
