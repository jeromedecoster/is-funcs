const fn = require('../is-date-string')

test('is-date-string', () => {
  // http://dygraphs.com/date-formats.html
  // http://momentjs.com/docs/#/parsing/
  // https://github.com/litejs/date-format-lite/blob/master/tests/index.js
  // https://github.com/litejs/date-format-lite/blob/master/index.js
  expect(fn(2009)).toBe(false)
  expect(fn([2009])).toBe(false)

  // year (invalid)
  expect(fn('2009')).toBe(false)

  // year + month (invalid)
  expect(fn('2009/01')).toBe(false)
  expect(fn('2009-01')).toBe(false)

  // year + month + day
  expect(fn('2009/01/31')).toBe(true)
  expect(fn('2009-01-31')).toBe(true)
  expect(fn('2009/2/1')).toBe(true)
  expect(fn('2009-2-1')).toBe(true)
  // separators must be the same
  expect(fn('2009/2-1')).toBe(false)
  expect(fn('2009-2/1')).toBe(false)

  // check date validity
  expect(fn('2019-01-31')).toBe(true)
  expect(fn('2019-02-31')).toBe(false)
  expect(fn('2019-03-31')).toBe(true)
  expect(fn('2019-04-31')).toBe(false)
  expect(fn('2019-05-31')).toBe(true)
  expect(fn('2019-06-31')).toBe(false)
  // leap years
  expect(fn('2016-2-29')).toBe(true)
  expect(fn('2020-2-29')).toBe(true)
  expect(fn('2015-2-29')).toBe(false)
  expect(fn('2019-2-29')).toBe(false)
  expect(fn('2020-2-30')).toBe(false)
  expect(fn('2019-2-29')).toBe(false)
  // wrong values
  expect(fn('2009/0/1')).toBe(false)
  expect(fn('2009/13/1')).toBe(false)
  expect(fn('2009/2/32')).toBe(false)
  expect(fn('2009/2/0')).toBe(false)
  // one space before number is valid
  expect(fn(' 2009/ 01/ 31 ')).toBe(true)
  expect(fn(' 2009- 01- 31 ')).toBe(true)
  expect(fn(' 2009- 2- 1 ')).toBe(true)
  // one space after number is not valid
  expect(fn(' 2009 / 01 / 31 ')).toBe(false)
  expect(fn(' 2009 - 01 - 31 ')).toBe(false)
  expect(fn(' 2009 - 2 - 1 ')).toBe(false)
  // more than one space is not valid
  expect(fn(' 2009-  2-  1 ')).toBe(false)
  expect(fn(' 2009 -   2 -   1 ')).toBe(false)

  // month + day + year (valid but confusing, my opinion: return false)
  expect(fn('12-31-2009')).toBe(false)

  // year + month + day + hour (invalid)
  expect(fn('2009/12/31 12')).toBe(false)

  // year + month + day + hour + minute
  expect(fn('2009/12/31 12:34')).toBe(true)
  expect(fn('2009-12-31 12:34')).toBe(true)
  expect(fn('2009-12-31 1:2')).toBe(true)
  expect(fn('2009-12-31T12:34')).toBe(true)
  expect(fn('2009-12-31T12:34Z')).toBe(true)
  // with T or Z slash is no more valid
  expect(fn('2009/12/31 12:34Z')).toBe(false)
  expect(fn('2009/12/31T12:34')).toBe(false)
  expect(fn('2009/12/31T12:34Z')).toBe(false)
  // too much space is not valid
  expect(fn('2009-12-31  12:34')).toBe(false)
  expect(fn('2009-12-31 1: 2')).toBe(false)
  expect(fn('2009-12-31 1:  2')).toBe(false)
  // wrong values
  expect(fn('2009/12/31 24:34')).toBe(false)
  expect(fn('2009/12/31 23:60')).toBe(false)

  // year + month + day + hour + minute + second
  expect(fn('2009/12/31 12:34:45')).toBe(true)
  expect(fn('2009-12-31 12:34:45')).toBe(true)
  expect(fn('2009-12-31 12:34:45Z')).toBe(true)
  expect(fn('2009-12-31 1:2:3')).toBe(true)
  expect(fn('2009-12-31 1: 2: 3')).toBe(false)
  expect(fn('2009-12-31T12:34:45')).toBe(true)
  expect(fn('2009-12-31T12:34:45Z')).toBe(true)
  // iso format restrictions
  expect(fn('2009-2-31T01:02')).toBe(false)
  expect(fn('2009-02-1T01:02')).toBe(false)
  expect(fn('2009-2-31T01:2')).toBe(false)
  expect(fn('2009-2-31T01:02:3')).toBe(false)
  expect(fn('2009-12-31T1:2:3')).toBe(false)
  // with T or Z slash is no more valid
  expect(fn('2009/12/31T12:34:45')).toBe(false)
  expect(fn('2009/12/31 12:34:45Z')).toBe(false)

  // year + month + day + hour + minute + second + millisecond
  expect(fn('2009-12-31 12:34:56.7')).toBe(true)
  expect(fn('2009-12-31 12:34:56.78')).toBe(true)
  expect(fn('2009-12-31 12:34:56.789')).toBe(true)
  expect(fn('2009-12-31 12:34:56.7Z')).toBe(true)
  expect(fn('2009-12-31 12:34:56.78Z')).toBe(true)
  expect(fn('2009-12-31 12:34:56.789Z')).toBe(true)
  expect(fn('2009-12-31T12:34:56.7')).toBe(true)
  expect(fn('2009-12-31T12:34:56.78')).toBe(true)
  expect(fn('2009-12-31T12:34:56.789')).toBe(true)
  expect(fn('2009-12-31T12:34:56.789Z')).toBe(true)
  expect(fn('2009-12-31T12:34:56.7890Z')).toBe(true)
  expect(fn('2009-12-31T12:34:56.789012345Z')).toBe(true)
  // date with slash is no more valid
  expect(fn('2009/12/31 12:34:56.789')).toBe(false)
  expect(fn('2009/12/31T12:34:56.789')).toBe(false)
  expect(fn('2009/12/31T12:34:56.789Z')).toBe(false)
  // wrong values
  expect(fn('2009-12-32T12:34:56.789Z')).toBe(false)
  expect(fn('2009-12-31T12:60:56.789Z')).toBe(false)
  expect(fn('2009-12-31T12:34:60.Z')).toBe(false)

  // Below, some tests on Chrome 57 and Firefox 52

  /*
  // year
  // expect(date('2009', 2009)).toBe(false) // invalid

  // year + month
  // expect(date('2009/12', 2009, 12)).toBe(true)  // valid in Chrome but not in Firefox
  // expect(date('2009/2', 2009, 2)).toBe(true)    // valid in Chrome but not in Firefox
  // expect(date('2009.12', 2009, 12)).toBe(true)  // valid in Chrome but not in Firefox
  // expect(date('2009-12', 2009, 12)).toBe(false) // invalid

  // month + year
  // expect(date('12/2009', 2009, 12)).toBe(false) // invalid
  // expect(date('12.2009', 2009, 12)).toBe(false) // invalid

  // year + month + day
  expect(date('2009/12/31', 2009, 12, 31)).toBe(true)
  expect(date('2009/2/1', 2009, 2, 1)).toBe(true)
  // expect(date('2009.12.31', 2009, 12, 31)).toBe(true)  // valid in Chrome but not in Firefox
  expect(date('2009-12-31', 2009, 12, 31, 1)).toBe(true) // confusing add 1 hour, but work
  expect(date('2009/12/31', 2009, 12, 31)).toBe(true)
  // expect(date('2009/13/31', 2009, 12, 1)).toBe(false)  // invalid
  // expect(date('2009-13/31', 2009, 12, 1)).toBe(false)  // invalid
  expect(date('2009/12/31', 2009, 12, 31)).toBe(true)
  // expect(date('2009/12/32', 2009, 12, 32)).toBe(false) // invalid
  // expect(date('2009.12.31', 2009, 12, 31)).toBe(true)  // valid in Chrome but not in Firefox
  // expect(date('2009-12-31', 2009, 12, 31)).toBe(false) // invalid
  // expect(date('2009|12|31', 2009, 12, 31)).toBe(false) // invalid

  // day + month + year
  // expect(date('31/12/2009', 2009, 12, 31)).toBe(true) // invalid
  // expect(date('31.12.2009', 2009, 12, 31)).toBe(true) // invalid
  // expect(date('31-12-2009', 2009, 12, 31)).toBe(true) // invalid

  // month + day + year
  // expect(date('12-31-2009', 2009, 12, 31)).toBe(true) // valid but confusing

  // day + month + year + hour
  // expect(date('2009/12/31 12', 2009, 12, 31, 12)).toBe(false)  // invalid
  // expect(date('2009/12/31 12Z', 2009, 12, 31, 12)).toBe(false) // invalid

  // day + month + year + hour + minute
  expect(date('2009/12/31 12:34', 2009, 12, 31, 12, 34)).toBe(true)
  expect(date('2009-12-31 12:34', 2009, 12, 31, 12, 34)).toBe(true)
  // expect(date('2009-12-31  12:34', 2009, 12, 31, 12, 34)).toBe(true) // valid in Chrome but not in Firefox
  // expect(date('2009.12.31 12:34', 2009, 12, 31, 12, 34)).toBe(true)  // valid in Chrome but not in Firefox
  // expect(date('2009/12/31T12:34', 2009, 12, 31, 12, 34)).toBe(false) // invalid
  // expect(date('2009/12/31 12:34Z', 2009, 12, 31, 13, 34)).toBe(true) // valid in Chrome but not in Firefox

  // day + month + year + hour + minute + second
  expect(date('2009/12/31 12:34:5', 2009, 12, 31, 12, 34, 5)).toBe(true)
  expect(date('2009/12/31 12:34:56', 2009, 12, 31, 12, 34, 56)).toBe(true)
  expect(date('2009-12-31 12:34:56', 2009, 12, 31, 12, 34, 56)).toBe(true)
  // expect(date('2009.12.31 12:34:56', 2009, 12, 31, 12, 34, 56)).toBe(true)  // valid in Chrome but not in Firefox
  // expect(date('2009/12/31 12:34:56Z', 2009, 12, 31, 13, 34, 56)).toBe(true) // valid in Chrome but not in Firefox
  // expect(date('2009/12/31T12:34:56', 2009, 12, 31, 12, 34, 56)).toBe(false) // invalid

  // day + month + year + hour + minute + second + millisecond
  // expect(date('2009/12/31 12:34:56.7', 2009, 12, 31, 12, 34, 56, 700)).toBe(false)  // valid in Chrome but not in Firefox
  // expect(date('2009/12/31 12:34:56.789', 2009, 12, 31, 12, 34, 56, 789)).toBe(true) // valid in Chrome but not in Firefox
  expect(date('2009-12-31 12:34:56.7', 2009, 12, 31, 12, 34, 56, 700)).toBe(true)
  expect(date('2009-12-31 12:34:56.789', 2009, 12, 31, 12, 34, 56, 789)).toBe(true)
  // expect(date('2009.12.31 12:34:56.789', 2009, 12, 31, 12, 34, 56, 789)).toBe(true) // valid in Chrome but not in Firefox
  // expect(date('2009.12.31 12:34:56:789', 2009, 12, 31, 12, 34, 56, 789)).toBe(true) // valid in Chrome but not in Firefox
  expect(date('2009-12-31T12:34:56.789', 2009, 12, 31, 13, 34, 56, 789)).toBe(true)    // T jump 1 hour
  expect(date('2009-12-31T22:34:56.789', 2009, 12, 31, 23, 34, 56, 789)).toBe(true)    // T jump 1 hour
  expect(date('2009-12-31T22:34:56.789Z', 2009, 12, 31, 23, 34, 56, 789)).toBe(true)   // T + Z jump 1 hour
  expect(date('2009-12-31 22:34:56.789Z', 2009, 12, 31, 23, 34, 56, 789)).toBe(true)   // T + Z jump 1 hour
  // expect(date('2009/12/31T12:34:56.789', 2009, 12, 31, 12, 34, 56, 789)).toBe(true) // invalid
  // expect(date('2009/12/31 12:34:56.000', 2009, 12, 31, 12, 34, 56, 0)).toBe(true)         // valid in Chrome but not in Firefox
  // expect(date('2009/12/31 12:34:56.999', 2009, 12, 31, 12, 34, 56, 999)).toBe(true)       // valid in Chrome but not in Firefox
  // expect(date('2009/12/31 12:34:56.999Z', 2009, 12, 31, 13, 34, 56, 999)).toBe(true)      // valid in Chrome but not in Firefox
  // expect(date('2009/12/31 12:34:56.999 Z', 2009, 12, 31, 13, 34, 56, 999)).toBe(true)     // valid in Chrome but not in Firefox
  // expect(date('2009/12/31 12:34:56.999 UTC', 2009, 12, 31, 13, 34, 56, 999)).toBe(true)   // valid in Chrome but not in Firefox
  // expect(date('2009/12/31 12:34:56.999   GMT', 2009, 12, 31, 13, 34, 56, 999)).toBe(true) // valid in Chrome but not in Firefox
  // expect(date('2009/12/31 12:34:56.999A', 2009, 12, 31, 13, 34, 56, 999)).toBe(false) // invalid
  */
})

function date(
  iso,
  year,
  month = 1,
  day = 1,
  hour = 0,
  minute = 0,
  second = 0,
  millisecond = 0
) {
  var d = new Date(iso)
  var ok =
    d.getFullYear() === year &&
    d.getMonth() === month - 1 &&
    d.getDate() === day &&
    d.getHours() === hour &&
    d.getMinutes() === minute &&
    d.getSeconds() === second &&
    d.getMilliseconds() === millisecond
  if (!ok) console.log('d:', d)
  if (d.getFullYear() !== year)
    console.log('year:', d.getFullYear(), '<->', year)
  if (d.getMonth() !== month - 1)
    console.log('month:', d.getMonth(), '<->', month - 1)
  if (d.getDate() !== day) console.log('day:', d.getDate(), '<->', day)
  if (d.getHours() !== hour) console.log('hour:', d.getHours(), '<->', hour)
  if (d.getMinutes() !== minute)
    console.log('minute:', d.getMinutes(), '<->', minute)
  if (d.getSeconds() !== second)
    console.log('second:', d.getSeconds(), '<->', second)
  if (d.getMilliseconds() !== millisecond)
    console.log('millisecond:', d.getMilliseconds(), '<->', millisecond)
  return ok
}
