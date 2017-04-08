const fn = require('../is-date')

test('is-date', () => {
  expect(fn(new Date)).toBe(true)

  expect(fn(new Date('-'))).toBe(false)
  expect(fn(Date.now())).toBe(false)

  expect(fn([])).toBe(false)
  expect(fn([1])).toBe(false)
  expect(fn({a:1})).toBe(false)
  expect(fn(Object.create(null))).toBe(false)
  expect(fn('abc')).toBe(false)
  expect(fn(0)).toBe(false)
  expect(fn(1)).toBe(false)
  expect(fn(null)).toBe(false)
  expect(fn(undefined)).toBe(false)
  expect(fn(NaN)).toBe(false)
  expect(fn(Infinity)).toBe(false)
  expect(fn(/./)).toBe(false)
  expect(fn(Math)).toBe(false)
  expect(fn(function() {})).toBe(false)
  expect(fn(arguments)).toBe(false)
})
