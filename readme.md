# is-funcs

> A very limited subset of type checking functions I use every day

## Install

```bash
npm i is-funcs
```

Package [on npm](https://www.npmjs.com/package/is-funcs)

## API

* [is](#isstr-data)
* [isArray](#isarraydata-check)
* [isBoolean](#isbooleandata)
* [isDefined](#isdefineddata)
* [isFloat](#isfloatdata)
* [isFunction](#isfunctiondata)
* [isGt](#isgtdata-than)
* [isGte](#isgtedata-than)
* [isInteger](#isintegerdata)
* [isLt](#isltdata-than)
* [isLte](#isltedata-than)
* [isNode](#isnodedata)
* [isNumber](#isnumberdata-check)
* [isObject](#isobjectdata-check)
* [isString](#isstringdata-check)

#### is(str, data)

Execute one or more check on `data`, based on `str`

```js
const is = require('is-funcs').is

// true
is('array', ['a'])

// false
is('array', [])

// true
is('array:false', [])

// true
is('lt:3', 2)

// false
is('lt:3', 5)

// true
is('float lte:1 gte:-1', -0.09)

// false
is('float lte:1 gte:-1', -1)
```

#### isArray(data, [check])

Check if `data` is an **Array** and his length is > 0

The argument `check` is optional, default to `true`

If `check` is `false`, the length is not tested

```js
const isArray = require('is-funcs').isArray

// false
isArray({a:1})

// true
isArray(['a'])

// false
isArray([])

// true
isArray([], false)
```

#### isBoolean(data)

Check if `data` is a **Boolean**

```js
const isBoolean = require('is-funcs').isBoolean

// false
isBoolean({a:1})

// true
isBoolean(true)

// true
isBoolean(false)
```

#### isDefined(data)

Check if `data` is defined

Return `true` if

* `data` is a **Number** and it's not `NaN`
* `data` is a **Plain Object** and has at least 1 key
* `data` is an **Array** and is length is > 0
* `data` is a **String** and is trimmed length is > 0

Otherwise return `false`

```js
const isDefined = require('is-funcs').isDefined

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

#### isFloat(data)

Check if `data` is a float **Number**

```js
const isFloat = require('is-funcs').isFloat

// false
isFloat('abc')

// false
isFloat(12)

// true
isFloat(12.3)
```

#### isFunction(data)

Check if `data` is a **Function**

```js
const isFunction = require('is-funcs').isFunction

// false
isFunction(12.3)

// true
isFunction(function() {})
```

#### isGt(data, than)

Check if `data` is a greater than `than`

```js
const isGt = require('is-funcs').isGt

// true
isGt(2, 1)

// false
isGt(2, 3)
```

#### isGte(data, than)

Check if `data` is a greater than or equal `than`

```js
const isGte = require('is-funcs').isGte

// true
isGte(3, 2)

// true
isGte(2, 2)

// false
isGte(2, 3)
```

#### isInteger(data)

Check if `data` is an integer **Number**

```js
const isInteger = require('is-funcs').isInteger

// true
isGt(2)

// false
isGt(2.34)
```

#### isLt(data, than)

Check if `data` is a lower than `than`

```js
const isLt = require('is-funcs').isLt

// true
isLt(1, 2)

// false
isLt(3, 2)
```

#### isLte(data, than)

Check if `data` is a lower than or equal `than`

```js
const isLte = require('is-funcs').isLte

// true
isLte(1, 2)

// true
isLte(2, 2)

// false
isLte(3, 2)
```

#### isNode(data)

Check if `data` is a **Html Element** landed in the `document.body`

* data nodeType must be 1
* non visual element like `style` or `style` are excluded

```js
const isNode = require('is-funcs').isNode

// true
isNode(document.querySelector('div'))

// false
isNode(document.createElement('div'))
```

#### isNumber(data, [check])

Check if `data` is a **Number**, not equals to NaN

The argument `check` is optional, default to `true`

If `check` is `false`, the `isNaN` step is ignored

```js
const isNumber = require('is-funcs').isNumber

// false
isNumber([1])

// true
isNumber(1)

// true
isNumber(2.34)

// false
isNumber(NaN)
```

#### isObject(data, [check])

Check if `data` is an **Plain Object** and has at least 1 key

The argument `check` is optional, default to `true`

If `check` is `false`, the keys count is not tested

```js
const isObject = require('is-funcs').isObject

// false
isObject([1])

// true
isObject({a:1})

// false
isObject({})

// true
isObject({}, false)
```

#### isString(data, [check])

Check if `data` is an **String** and his trimmed length is > 0

The argument `check` is optional, default to `true`

If `check` is `false`, the trimmed length is not tested

```js
const isString = require('is-funcs').isString

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

## License

MIT
