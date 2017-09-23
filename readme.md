# is-funcs

> A very limited subset of is-* functions I use every day

## Install

```bash
npm i is-funcs
```

Package [on npm](https://www.npmjs.com/package/is-funcs)

## API

* [is-array-filled](#is-array-filleddata)
* [is-boolean](#is-booleandata)
* [is-buffer](#is-bufferdata)
* [is-date](#is-datedata)
* [is-date-string](#is-date-stringdata)
* [is-float](#is-floatdata)
* [is-function](#is-functiondata)
* [is-gt](#is-gtdata-than)
* [is-gte](#is-gtedata-than)
* [is-integer](#is-integerdata)
* [is-lt](#is-ltdata-than)
* [is-lte](#is-ltedata-than)
* [is-nan](#is-nandata)
* [is-node](#is-nodedata)
* [is-node-landed](#is-node-landeddata)
* [is-number-defined](#is-number-defineddata)
* [is-number-string](#is-number-stringdata)
* [is-object](#is-objectdata)
* [is-plain-object](#is-plain-objectdata)
* [is-regexp](#is-regexpdata)
* [is-string-filled](#is-string-filleddata)

### is-array-filled(data)

Check if `data` is an **Array** and is length is > 0

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isArrayFilled = require('is-funcs/is-array-filled')

// false
isArrayFilled({a:1})

// true
isArrayFilled(['a'])

// false
isArrayFilled([])
```

---

### is-boolean(data)

Check if `data` is a **Boolean**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

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

### is-buffer(data)

Check if `data` is a node **Buffer**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isBuffer = require('is-funcs/is-buffer')

// false
isBuffer([1])

// false
isBuffer(Buffer)

// true
isBuffer(Buffer.from('abc'))
```

---

### is-date(data)

Check if `data` is a **valid** instance of `new Date`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isDate = require('is-funcs/is-date')

// true
isDate(new Date())

// false, invalid date
isDate(new Date('-'))

// false
isDate('2000-01-01')

// false
isDate(2010)
```

---

### is-date-string(data)

Check if `data` is a valid date string representation

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

Date string validation is a nightmare. The browsers have [differents behaviors](http://dygraphs.com/date-formats.html)

This function validates the patterns that return a correct date in the following case

```js
// valid date
console.log(new Date(string))
```

Valid patterns are:
* `YYYY/M/D` and `YYYY-M-D`
* `YYYY/MM/DD` and `YYYY-MM-DD`
* `YYYY/M/D H:M` and `YYYY-M-D H:M`
* `YYYY/M/D HH:MM` and `YYYY-M-D HH:MM`
* `YYYY/M/D H:M:S` and `YYYY-M-D H:M:S`
* `YYYY/M/D HH:MM:SS` and `YYYY-M-D HH:MM:SS`
* `YYYY-M-DTHH:MM:SSZ` and `YYYY-M-DTHH:MM:SS.LLLZ`

This function also test the date validity:
* No 29 february if this is not a leap year
* No 31 april

```js
const isDateString = require('is-funcs/is-date-string')

// true
isDateString('2009-01-31')

// true
isDateString('2009-12-31T12:34:56.789Z')

// false, because invalid iso date
isDateString('2009-12-3T12:34:56.789Z')

// false, because april has 30 days
isDateString('2015-04-31')

// false, because 2015 is not a leap year
isDateString('2015-02-29')
```

---

### is-float(data)

Check if `data` is a **Float Number**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isFloat = require('is-funcs/is-float')

// false
isFloat('abc')

// false
isFloat(12)

// true
isFloat(12.3)

/*
  Attention: Javascript returns wrong results with extreme values
*/
// true
isFloat(12345678900)

// false
isFloat(1000.00000000000001)
```

---

### is-function(data)

Check if `data` is a **Function** defined by the developper. Standard built-in objects are excluded

Use it if you really need this **full** test, otherwise just write `typeof data === 'function'`

```js
const isFunction = require('is-funcs/is-function')

// true
isFunction(function() {})

// false
isFunction(Function)

// false
isFunction(Promise)

// false
isFunction(isNaN)
```

---

### is-gt(data, than)

Check if `data` is a greater than `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |

```js
const isGt = require('is-funcs/is-gt')

// true
isGt(2, 1)

// false
isGt(2, 3)
```

---

### is-gte(data, than)

Check if `data` is a greater or equal than `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |

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

### is-integer(data)

Check if `data` is an **Integer Number**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isInteger = require('is-funcs/is-integer')

// true
isInteger(2)

// false
isInteger(2.34)

/*
  Attention: Javascript returns wrong results with extreme values
*/
// false
isInteger(12345678900)

// true
isInteger(100.000000000000001)
```

---

### is-lt(data, than)

Check if `data` is a lower than `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |

```js
const isLt = require('is-funcs/is-lt')

// true
isLt(1, 2)

// false
isLt(3, 2)
```

---

### is-lte(data, than)

Check if `data` is a lower or equal than `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |

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

### is-nan(data)

Check if `data` is a **real** `NaN` **Number**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isnan = require('is-funcs/is-nan')

// true
isnan(NaN)

// true
isnan(-NaN)

// false
isnan('abc')

// default isNaN return true
isNaN('abc')
```

---

### is-node(data)

Check if `data` is a **Html Element** with a nodeType of **1**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isNode = require('is-funcs/is-node')

// true
isNode(document.querySelector('div'))

// true
isNode(document.createElement('div'))
```

---

### is-node-landed(data)

Check if `data` is a *visual* **Html Element** with a nodeType of **1** landed in the `document.body`

Elements like `style` or `script` are excluded

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isNodeLanded = require('is-funcs/is-node-landed')

// true
isNodeLanded(document.querySelector('div'))

// false
var div = document.createElement('div')
isNodeLanded(div)

// true
document.body.appendChild(div)
isNodeLanded(div)
```

---

### is-number-defined(data)

Check if `data` is a **defined Number**, not equals to `NaN`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isNumberDefined = require('is-funcs/is-number-defined')

// true
isNumberDefined(1)

// true
isNumberDefined(2.34)

// false
isNumberDefined(NaN)

// false
isNumberDefined([1])
```

---

### is-number-string(data)

Check if `data` is a valid number string representation

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

This function validates the patterns that return a correct number in the following case

```js
// valid number
console.log(parseFloat(string))
```

```js
const isNumberString = require('is-funcs/is-number-string')

// true
isNumberString('1')

// true
isNumberString('.34')

// true
isNumberString(' -2.34 ')

// true
isNumberString('NaN')

// false
isNumberString('1.23.45')

// false
isNumberString('abc')

// false
isNumberString(12.3)
```

---

### is-object(data)

Simplest and fastest way to check if `data` is an **Object**

We just wants to know if `data` is **an object where we can define a property, excluding Functions**

Technically `functions` should be `true` but what we want here is just a **not so exact but quick** test to know if `data` is like a **Plain Object**

See [is-plain-object](#is-plain-objectdata) for stricter but slower object test

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isObject = require('is-funcs/is-object')

// true
isObject({})

// true
isObject([])

// true
isObject(arguments)

// true, typeof Math JSON Reflect Intl and WebAssembly is "object"
isObject(JSON)

// false
isObject(Number)

// false
isObject(function() {})
```

---

### is-plain-object(data)

Check if `data` is a **Plain Object**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isPlainObject = require('is-funcs/is-plain-object')

// true
isPlainObject({a:1})

// true
isPlainObject({})

// false
isPlainObject(arguments)

// false
isPlainObject([1])

// false
isPlainObject(JSON)
```

---

### is-regexp(data)

Check if `data` is a **RegExp**


```js
const isRegexp = require('is-funcs/is-regexp')

// false
isRegexp(true)

// false
isRegexp('/./')

// true
isRegexp(/./)

// true
isRegexp(new RegExp('/./'))
```

---

### is-string-filled(data)

Check if `data` is an **String** and his trimmed length is > 0

All possible unicode blank chars are trimmed

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isStringFilled = require('is-funcs/is-string-filled')

// true
isStringFilled('abc')

// false
isStringFilled('')

// false
isStringFilled('  ')

// false
isStringFilled(' \u0020 \u180E \u200B ')

// false
isStringFilled({a:1})
```

## License

MIT
