const fn = require('../set-string')
const test = require('tape')

test('regular', function (t) {

  var s1 = new String('abc')
  var s2 = new String('')
  var s3 = new String(' ')

  t.equal(fn('abc'), 'abc')
  t.equal(fn(''),    '')
  t.equal(fn(' '),   ' ')
  t.equal(fn(s1),    'abc')
  t.equal(fn(s2),    '')
  t.equal(fn(s3),    ' ')
  t.end()
})

test('fallback', function (t) {

  var s1 = new String('abc')
  var s2 = new String('')
  var s3 = new String(' ')

  t.equal(fn(),             '')
  t.equal(fn(1, null),      null)
  t.equal(fn(1, undefined), '')
  t.equal(fn(1, 'abc'),     'abc')
  t.equal(fn(1, s1),        'abc')
  t.equal(fn(1, s2),        '')
  t.equal(fn(1, s3),        ' ')
  t.end()
})

test('allowed', function (t) {

  var s1 = new String('no')
  var s2 = new String('err')

  t.equal(fn('abc', null,      ['yes', 'no']), null)
  t.equal(fn('abc', '',        ['yes', 'no']), '')
  t.equal(fn('yes', '',        ['yes', 'no']), 'yes')
  t.equal(fn('no',  '',        ['yes', 'no']), 'no')
  t.equal(fn(s1,    '',        ['yes', 'no']), 'no')
  t.equal(fn(s1,    '',        ['yes', s1]),   'no')
  t.equal(fn('why', s2,        ['yes', 'no']), 'err')
  t.equal(fn('why', undefined, ['yes', 'no']), '')

  t.equal(fn('abc', '',        'yes no'),      '')
  t.equal(fn('no',  '',        'yes no'),      'no')
  t.equal(fn('no',  '',        '  yes   no '), 'no')

  t.end()
})
