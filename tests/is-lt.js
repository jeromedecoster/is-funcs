const fn = require('../is-lt')

test('is-lt', () => {
  expect(fn(-1, 2)).toBe(true)
  expect(fn(-1.1, 2)).toBe(true)
  expect(fn(-0.01, 2)).toBe(true)
  expect(fn(0.01, 2)).toBe(true)
  expect(fn(0, 2)).toBe(true)
  expect(fn(-0, 2)).toBe(true)
  expect(fn(-Infinity, 2)).toBe(true)
  expect(fn(2, Infinity)).toBe(true)
  expect(fn(-Infinity, Infinity)).toBe(true)

  expect(fn(new Number(2), Infinity)).toBe(false)
  expect(fn(NaN, 1)).toBe(false)
  expect(fn(1, NaN)).toBe(false)
  expect(fn(NaN, NaN)).toBe(false)
  expect(fn(1, 1)).toBe(false)
  expect(fn(Infinity, Infinity)).toBe(false)
  expect(fn(-Infinity, -Infinity)).toBe(false)

  expect(fn('2', 1)).toBe(false)
  expect(fn(2, [])).toBe(false)
  expect(fn(2)).toBe(false)
  expect(fn(2, null)).toBe(false)
  expect(fn(2, true)).toBe(false)
  expect(fn(2, false)).toBe(false)
  expect(fn(2, [])).toBe(false)
  expect(fn(2, [1])).toBe(false)
  expect(fn(2, {})).toBe(false)
  expect(fn(2, {a:1})).toBe(false)
  expect(fn(2, /./)).toBe(false)
  expect(fn(2, Math)).toBe(false)
  expect(fn(2, function() {})).toBe(false)
  expect(fn(2, new Date)).toBe(false)
  expect(fn(2, arguments)).toBe(false)
})
