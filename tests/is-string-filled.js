const fn = require('../is-string-filled')

test('is-string ', () => {
  expect(fn('abc')).toBe(true)
  expect(fn(' a ')).toBe(true)

  expect(fn('   ')).toBe(false)
  expect(fn('')).toBe(false)

  // https://www.cs.tut.fi/~jkorpela/chars/spaces.html
  // http://www.fileformat.info/info/unicode/char/180e/index.htm
  // http://www.fileformat.info/info/unicode/char/200B/index.htm
  expect(fn('\u0020\u0020')).toBe(false)
  expect(fn('\u00A0\u00A0')).toBe(false)
  expect(fn('\u1680\u1680')).toBe(false)
  expect(fn('\u180E\u180E')).toBe(false)
  expect(fn('\u2000\u2000')).toBe(false)
  expect(fn('\u2001\u2001')).toBe(false)
  expect(fn('\u2002\u2002')).toBe(false)
  expect(fn('\u2003\u2003')).toBe(false)
  expect(fn('\u2004\u2004')).toBe(false)
  expect(fn('\u2005\u2005')).toBe(false)
  expect(fn('\u2006\u2006')).toBe(false)
  expect(fn('\u2007\u2007')).toBe(false)
  expect(fn('\u2008\u2008')).toBe(false)
  expect(fn('\u2009\u2009')).toBe(false)
  expect(fn('\u200A\u200A')).toBe(false)
  expect(fn('\u200B\u200B')).toBe(false)
  expect(fn('\u202F\u202F')).toBe(false)
  expect(fn('\u205F\u205F')).toBe(false)
  expect(fn('\u3000\u3000')).toBe(false)
  expect(fn('\uFEFF\uFEFF')).toBe(false)

  expect(fn(new String(''))).toBe(false)
  expect(fn(new String('   '))).toBe(false)
  expect(fn(new String('abc'))).toBe(false)
  expect(fn([])).toBe(false)
  expect(fn([1])).toBe(false)
  expect(fn(1)).toBe(false)
  expect(fn(0)).toBe(false)
  expect(fn(true)).toBe(false)
  expect(fn(false)).toBe(false)
  expect(fn(null)).toBe(false)
  expect(fn(undefined)).toBe(false)
  expect(fn(Math)).toBe(false)
  expect(fn(JSON)).toBe(false)
  expect(fn(Set)).toBe(false)
  expect(fn(Map)).toBe(false)
  expect(fn(Int16Array)).toBe(false)
  expect(fn(new Int16Array())).toBe(false)
  expect(fn(Buffer.from('a'))).toBe(false)
  expect(fn(function() {})).toBe(false)
  expect(fn(new Date())).toBe(false)
  expect(fn(arguments)).toBe(false)
})

/*
test('is-string filled', () => {
  expect(fn('abc', true)).toBe(true)
  expect(fn(' a ', true)).toBe(true)

  expect(fn('   ', true)).toBe(false)
  expect(fn('', true)).toBe(false)
  expect(fn(new String(''), true)).toBe(false)
  expect(fn(new String('abc'), true)).toBe(false)
})
*/
