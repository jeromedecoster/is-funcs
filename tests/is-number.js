const fn = require('../is-number')

test('is-number', () => {
  expect(fn(-1.1)).toBe(true)
  expect(fn(-1)).toBe(true)
  expect(fn(0)).toBe(true)
  expect(fn(1)).toBe(true)
  expect(fn(1.1)).toBe(true)
  expect(fn(Infinity)).toBe(true)

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
  expect(fn(new Date)).toBe(false)
  expect(fn(arguments)).toBe(false)
})
