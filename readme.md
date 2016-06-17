# is-funcs

> A very limited subset of type checking functions I use every day

## Install

```bash
npm i is-funcs
```

Package [on npm](https://www.npmjs.com/package/is-funcs)

## require

```js
// require all functions
const isObject = require('is-funcs').isObject

// require only the single function (recommanded)
const isObject = require('is-funcs/is-object')
```

## API

* [isArray](#isarraydata-check)
* [isBoolean](#isbooleandata)
* [isDefined](#isdefineddata)
* [isFalse](#isfalsedata)
* [isFloat](#isfloatdata)
* [isFunction](#isfunctiondata)
* [isGt](#isgtdata-than)
* [isGte](#isgtedata-than)
* [isInteger](#isintegerdata)
* [isLt](#isltdata-than)
* [isLte](#isltedata-than)
* [isNaN](#isnandata)
* [isNode](#isnodedata)
* [isNumber](#isnumberdata-check)
* [isObject](#isobjectdata-check)
* [isString](#isstringdata-check)
* [isTrue](#istruedata)
* [setBoolean](#setbooleandata-fallback)
* [setNumber](#setnumberdata-fallback-min-max)
* [setString](#setstringdata-fallback-allowed)
* [toNumber](#tonumberdata-fallback)

#### isArray(data, [check])

Check if `data` is an **Array** and his length is > 0

The argument `check` is optional, default to `true`

If `check` is `false`, the length is not tested

```js
const isArray = require('is-funcs/is-array')

// false
isArray({a:1})

// true
isArray(['a'])

// false
isArray([])

// true
isArray([], false)
```

---

#### isBoolean(data)

Check if `data` is a **Boolean**

```js
const isBoolean = require('is-funcs/is-boolean')

// false
isBoolean({a:1})

// true
isBoolean(true)

// true
isBoolean(false)
```

---

#### isDefined(data)

Check if `data` is defined

Return `true` if

* `data` is a **Number** and it's not `NaN`
* `data` is a **Plain Object** and has at least 1 key
* `data` is an **Array** and is length is > 0
* `data` is a **String** and is trimmed length is > 0

Otherwise return `false`

```js
const isDefined = require('is-funcs/is-defined')

// false
isDefined(NaN)

// true
isDefined(0)

// true
isDefined(1)

// false
isDefined({})

// true
isDefined({a:1})

// false
isDefined([])

// true
isDefined(['a'])

// false
isDefined('')

// false
isDefined(' ')

// true
isDefined('a')
```

---

#### isFalse(data)

Check if `data` is `false`

```js
const isFalse = require('is-funcs/is-false')

// true
isFalse(false)

// true
isFalse(new Boolean(false))

// false
isFalse(0)
```

---

#### isFloat(data)

Check if `data` is a float **Number**

```js
const isFloat = require('is-funcs/is-float')

// false
isFloat('abc')

// false
isFloat(12)

// true
isFloat(12.3)
```

---

#### isFunction(data)

Check if `data` is a **Function**

```js
const isFunction = require('is-funcs/is-function')

// false
isFunction(12.3)

// true
isFunction(function() {})
```

---

#### isGt(data, than)

Check if `data` is a greater than `than`

```js
const isGt = require('is-funcs/is-gt')

// true
isGt(2, 1)

// false
isGt(2, 3)
```

---

#### isGte(data, than)

Check if `data` is a greater than or equal `than`

```js
const isGte = require('is-funcs/is-gte')

// true
isGte(3, 2)

// true
isGte(2, 2)

// false
isGte(2, 3)
```

---

#### isInteger(data)

Check if `data` is an integer **Number**

```js
const isInteger = require('is-funcs/is-integer')

// true
isGt(2)

// false
isGt(2.34)
```

---

#### isLt(data, than)

Check if `data` is a lower than `than`

```js
const isLt = require('is-funcs/is-lt')

// true
isLt(1, 2)

// false
isLt(3, 2)
```

---

#### isLte(data, than)

Check if `data` is a lower than or equal `than`

```js
const isLte = require('is-funcs/is-lte')

// true
isLte(1, 2)

// true
isLte(2, 2)

// false
isLte(3, 2)
```

---

#### isNaN(data)

Check if `data` is a **real** `NaN` **Number**

```js
const isnan = require('is-funcs/is-nan')

// true
isnan(NaN)

// true
isnan(new Number(NaN))

// false
isnan('abc')

// default isNaN return true
isNaN('abc')
```

---

#### isNode(data)

Check if `data` is a **Html Element** landed in the `document.body`

* data nodeType must be 1
* non visual element like `style` or `style` are excluded

```js
const isNode = require('is-funcs/is-node')

// true
isNode(document.querySelector('div'))

// false
isNode(document.createElement('div'))
```

---

#### isNumber(data, [check])

Check if `data` is a **Number**, not equals to NaN

The argument `check` is optional, default to `true`

If `check` is `false`, the `isNaN` step is ignored

```js
const isNumber = require('is-funcs/is-number')

// false
isNumber([1])

// true
isNumber(1)

// true
isNumber(2.34)

// false
isNumber(NaN)
```

---

#### isObject(data, [check])

Check if `data` is an **Plain Object** and has at least 1 key

The argument `check` is optional, default to `true`

If `check` is `false`, the keys count is not tested

```js
const isObject = require('is-funcs/is-object')

// false
isObject([1])

// true
isObject({a:1})

// false
isObject({})

// true
isObject({}, false)
```

---

#### isString(data, [check])

Check if `data` is an **String** and his trimmed length is > 0

The argument `check` is optional, default to `true`

If `check` is `false`, the trimmed length is not tested

```js
const isString = require('is-funcs/is-string')

// false
isString({a:1})

// true
isString('abc')

// false
isString('')

// false
isString('  ')

// true
isString('  ', false)
```

---

#### isTrue(data)

Check if `data` is `true`

```js
const isTrue = require('is-funcs/is-true')

// true
isTrue(true)

// true
isTrue(new Boolean(true))

// false
isTrue(1)
```

---

#### setBoolean(data, [fallback])

Check if `data` is a **Boolean**

If yes, return `data` otherwise return `fallback`

The argument `fallback` is optional, default to `false`

`fallback` must be a `boolean` or strictly equal to `null`

```js
const setBoolean = require('is-funcs/set-boolean')

function test(opts) {
  opts = opts || {}

  // option silent will be `true` if not defined
  opts.silent = setBoolean(opts.silent, true)

  // delete value is `null` is defined
  if (opts.silent === null) delete opts.silent
}
```

---

#### setNumber(data, [fallback], [min], [max])

Check if `data` is a **Number**

If yes, return `data` otherwise return `fallback`

The argument `fallback` is optional, default to `0`

`fallback` must be a `number` or strictly equal to `null`

`data` can be clamped between `min` and `max`

```js
const setNumber = require('is-funcs/set-number')

function test(opts) {
  opts = opts || {}

  // option `delay` will be `50` if not defined
  opts.delay = setNumber(opts.delay, 50)

  // option `time` will be 25 min
  opts.time = setNumber(opts.time, 50, 25)
}
```

---

#### setString(data, [fallback], [allowed])

Check if `data` is a **String**

If yes, return `data` otherwise return `fallback`

The argument `fallback` is optional, default to `''`

`fallback` must be a `string` or strictly equal to `null`

`allowed` can be a string or an array of accepted values. If `data` is not found in `allowed`, the `fallback` is returned

```js
const setString = require('is-funcs/set-string')

function test(opts) {
  opts = opts || {}

  // option `ignore` can be 'resize' or 'scroll', fallback to 'resize'
  opts.ignore = setString(opts.ignore, 'resize', 'resize scroll')

  // using the array form
  opts.ignore = setString(opts.ignore, 'resize', ['resize', 'scroll'])
}
```

---

#### toNumber(data, [fallback])

Check if `data` is a **String representation** of a **Number**

If yes, convert and return the numeric value otherwise return `fallback`

The argument `fallback` is optional, default to `undefined`

`fallback` must be a `number` or strictly equal to `null`

If `data` is already a number, return `data`

```js
const toNumber = require('is-funcs/to-number')

// 1.23
toNumber('1.23')

// undefined
toNumber('0.1s')

// 1
toNumber('3.45s', 1)

// -1.23
toNumber(-1.23)
```

## License

MIT
