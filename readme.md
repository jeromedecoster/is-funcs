# is-funcs

> A very limited subset of is-* functions I use every day

## Install

```bash
npm i is-funcs
```

Package [on npm](https://www.npmjs.com/package/is-funcs)

## API

* [is-array](#is-arraydata-filled)
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
* [is-node](#is-nodedata-check)
* [is-number](#is-numberdata)
* [is-object](#is-objectdata-filled)
* [is-regexp](#is-regexpdata)
* [is-string](#is-stringdata-filled)

### is-array(data, [filled])

Check if `data` is an **Array**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **filled** | optional `filled`, default to `false`. If `true`, check length is > 0 |

```js
const isarray = require('is-funcs/is-array')

// false
isarray({a:1})

// true
isarray(['a'])

// true
isarray([])

// false
isarray([], true)
```

---

### is-boolean(data)

Check if `data` is a **Boolean**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isboolean = require('is-funcs/is-boolean')

// false
isboolean({a:1})

// true
isboolean(true)

// true
isboolean(false)
```

---

### is-buffer(data)

Check if `data` is a node **Buffer**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isbuffer = require('is-funcs/is-buffer')

// false
isbuffer([1])

// false
isbuffer(Buffer)

// true
isbuffer(Buffer.from('abc'))
```

---

### is-date(data)

Check if `data` is a valid instance of `new Date`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isdate = require('is-funcs/is-date')

// true
isdate(new Date())

// false, invalid date
isdate(new Date('-'))

// false
isdate('2000-01-01')

// false
isdate(2010)
```

---

### is-date-string(data)

Check if `data` is a valid date string representation

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

Date string validation is a nightmare. The browsers have [differents behaviors](http://dygraphs.com/date-formats.html)

This function validates the patterns that return a correct date the following case

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
const isdatestring = require('is-funcs/is-date-string')

// true
isdatestring('2009-01-31')

// true
isdatestring('2009-12-31T12:34:56.789Z')

// false, invalid iso date
isdatestring('2009-12-3T12:34:56.789Z')

// false april has 30 days
isdatestring('2015-04-31')

// false not a leap year
isdatestring('2015-02-29')
```

---

### is-float(data)

Check if `data` is a **Float Number**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isfloat = require('is-funcs/is-float')

// false
isfloat('abc')

// false
isfloat(12)

// true
isfloat(12.3)
```

---

### is-function(data)

Check if `data` is a **Function**

```js
const isfunction = require('is-funcs/is-function')

// false
isfunction(12.3)

// true
isfunction(function() {})
```

---

### is-gt(data, than)

Check if `data` is a greater than `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |

```js
const isgt = require('is-funcs/is-gt')

// true
isgt(2, 1)

// false
isgt(2, 3)
```

---

### is-gte(data, than)

Check if `data` is a greater than or equal `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |

```js
const isgte = require('is-funcs/is-gte')

// true
isgte(3, 2)

// true
isgte(2, 2)

// false
isgte(2, 3)
```

---

### is-integer(data)

Check if `data` is an **Integer Number**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isinteger = require('is-funcs/is-integer')

// true
isinteger(2)

// false
isinteger(2.34)
```

---

### is-lt(data, than)

Check if `data` is a lower than `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |

```js
const islt = require('is-funcs/is-lt')

// true
islt(1, 2)

// false
islt(3, 2)
```

---

### is-lte(data, than)

Check if `data` is a lower than or equal `than`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **than** | the reference `than` |

```js
const islte = require('is-funcs/is-lte')

// true
islte(1, 2)

// true
islte(2, 2)

// false
islte(3, 2)
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

// false
isnan('abc')

// default isNaN return true
isNaN('abc')
```

---

### is-node(data, [check])

Check if `data` is a **Html Element** with a nodeType of **1**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **check** | optional `check`, default to `false`. If `true`, the following tests are done |

If `check` is `true`

* check if `data` is landed in the `document.body`
* check if `data` is a visula element. Elements like `style` or `script` are excluded

```js
const isnode = require('is-funcs/is-node')

// true
isnode(document.querySelector('div'))

// false
isnode(document.createElement('div'), true)

var div = document.createElement('div')
document.body.appendChild(div)
// true
isnode(div, true)
```

---

### is-number(data)

Check if `data` is a **Number**, not equals to `NaN`

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |

```js
const isnumber = require('is-funcs/is-number')

// false
isnumber([1])

// true
isnumber(1)

// true
isnumber(2.34)

// false
isnumber(NaN)
```

---

### is-object(data, [filled])

Check if `data` is an **Plain Object**

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **filled** | optional `filled`, default to `false`. If `true`, check if `data` has at least 1 key |

**note:** function `arguments` is evaluted as plain object.

```js
const isobject = require('is-funcs/is-object')

// false
isobject([1])

// true
isobject({a:1})

// true
isobject({})

// false
isObject({}, true)
```

---

### is-regexp(data)

Check if `data` is a **RegExp**


```js
const isregexp = require('is-funcs/is-regexp')

// false
isregexp(true)

// false
isregexp('/./')

// true
isregexp(/./)

// true
isregexp(new RegExp('/./'))
```

---

### is-string(data, [filled])

Check if `data` is an **String** and his trimmed length is > 0

| Argument | Action |
| :------ | :------- |
| **data** | the tested `data` |
| **filled** | optional `filled`, default to `false`. If `true`, check if `data` trimmed length is > 0 |

```js
const isstring = require('is-funcs/is-string')

// false
isstring({a:1})

// true
isstring('abc')

// true
isstring('')

// true
isString('  ')

// false
isstring('  ', true)
```

## License

MIT
