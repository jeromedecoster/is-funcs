# is-funcs

> A very limited subset of is-* functions I use every day

## Install

```bash
npm i is-funcs
```

Package [on npm](https://www.npmjs.com/package/is-funcs)

## API

* [isArray](#isarraydata-check)
* [isBoolean](#isbooleandata-safe)
* [isDefined](#isdefineddata)
* [isFloat](#isfloatdata-safe)
* [isFunction](#isfunctiondata)
* [isGt](#isgtdata-than-safe)
* [isGte](#isgtedata-than-safe)
* [isInteger](#isintegerdata-safe)
* [isLt](#isltdata-than-safe)
* [isLte](#isltedata-than-safe)
* [isNaN](#isnandata-safe)
* [isNode](#isnodedata)
* [isNumber](#isnumberdata-check-safe)
* [isObject](#isobjectdata-check-safe)
* [isString](#isstringdata-check-safe)

#### isArray(data, [check])

Check if `data` is an **Array** and his length is > 0

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **check** | optional `check`, default to `true`. If `false`, the length is not tested |

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

#### isBoolean(data, [safe])

Check if `data` is a **Boolean**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **safe** | optional `safe`, default to `false`. If `true`, validate also the `new Boolean()` instance |

```js
const isBoolean = require('is-funcs/is-boolean')

// false
isBoolean({a:1})

// true
isBoolean(true)

// true
isBoolean(false)

// true
isBoolean(new Boolean(false), true)
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

#### isFloat(data, [safe])

Check if `data` is a float **Number**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **safe** | optional `safe`, default to `false`. If `true`, validate also the `new Number()` instance |

```js
const isFloat = require('is-funcs/is-float')

// false
isFloat('abc')

// false
isFloat(12)

// true
isFloat(12.3)

// true
isFloat(new Number(12.3), true)
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

#### isGt(data, than, [safe])

Check if `data` is a greater than `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |
| **safe** | optional `safe`, default to `false`. If `true`, validate also the `new Number()` instance |

```js
const isGt = require('is-funcs/is-gt')

// true
isGt(2, 1)

// false
isGt(2, 3)

// true
isGt(new Number(2), 1, true)
```

---

#### isGte(data, than, [safe])

Check if `data` is a greater than or equal `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |
| **safe** | optional `safe`, default to `false`. If `true`, validate also the `new Number()` instance |

```js
const isGte = require('is-funcs/is-gte')

// true
isGte(3, 2)

// true
isGte(2, 2)

// false
isGte(2, 3)

// true
isGte(new Number(2), 2, true)
```

---

#### isInteger(data, [safe])

Check if `data` is an integer **Number**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **safe** | optional `safe`, default to `false`. If `true`, validate also the `new Number()` instance |

```js
const isInteger = require('is-funcs/is-integer')

// true
isGt(2)

// false
isGt(2.34)

// true
isGt(new Number(2), true)
```

---

#### isLt(data, than, [safe])

Check if `data` is a lower than `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |
| **safe** | optional `safe`, default to `false`. If `true`, validate also the `new Number()` instance |

```js
const isLt = require('is-funcs/is-lt')

// true
isLt(1, 2)

// false
isLt(3, 2)

// true
isLt(new Number(1), 2, true)
```

---

#### isLte(data, than, [safe])

Check if `data` is a lower than or equal `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |
| **safe** | optional `safe`, default to `false`. If `true`, validate also the `new Number()` instance |

```js
const isLte = require('is-funcs/is-lte')

// true
isLte(1, 2)

// true
isLte(2, 2)

// false
isLte(3, 2)

// true
isLte(new Number(1), 2, true)
```

---

#### isNaN(data, [safe])

Check if `data` is a **real** `NaN` **Number**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **safe** | optional `safe`, default to `false`. If `true`, validate also the `new Number()` instance |

```js
const isnan = require('is-funcs/is-nan')

// true
isnan(NaN)

// false
isnan('abc')

// default isNaN return true
isNaN('abc')

// true
isnan(new Number(NaN), true)
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

#### isNumber(data, [check], [safe])

Check if `data` is a **Number**, not equals to NaN

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **check** | optional `check`, default to `true`. If `false`, the `isNaN` step is ignored |
| **safe** | optional `safe`, default to `false`. If `true`, validate also the `new Number()` instance |

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

// true
isNumber(new Number(1), true, true)
```

---

#### isObject(data, [check], [safe])

Check if `data` is an **Plain Object** and has at least 1 key

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **check** | optional `check`, default to `true`. If `false`, the keys count is not tested |
| **safe** | optional `safe`, default to `false`. If `true`, validate also the `new Object()` instance |

**note:** function `arguments` is evaluted as plain object. Set `safe` to `true` if you want exclude this possibility

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

// true
isObject(new Object({a:1}), true, true)
```

---

#### isString(data, [check], [safe])

Check if `data` is an **String** and his trimmed length is > 0

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **check** | optional `check`, default to `true`. If `false`, trimmed length is not tested |
| **safe** | optional `safe`, default to `false`. If `true`, validate also the `new String()` instance |

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

// true
isString(new String('abc'), true, true)
```

## Note

The `safe` option, disabled by default, is here to cover extreme cases

99.99% of the time, you don't need the `safe` option

## License

MIT
