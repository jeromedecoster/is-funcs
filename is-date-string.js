const simple = /^(\d{4})([-\/])[ ]{0,1}(\d{1,2})([-\/])[ ]{0,1}(\d{1,2})$/
const numend = /\d$/
const hms    = /^(.*)([ T])(\d{1,2}):(\d{1,2})(Z?)(:(\d{1,2})(Z?))?$/
const full   = /^(.*)\.(\d+)(Z?)$/
const isosim = /^\d{4}-\d{2}-\d{2}$/

function dateString(data) {
  if (typeof data !== 'string') return false
  data = data.trim()
  var ret, yea, sep0, mon, sep1, day, prev, t, hou, min, z1, sec, z2, mil

  // simple: 2009-12-31
  ret = simple.exec(data)
  if (ret !== null) {
    yea = parseInt(ret[1])
    sep0 = ret[2]
    mon = parseInt(ret[3])
    sep1 = ret[4]
    day = parseInt(ret[5])
    // check date validity
    // february and leap year case
    if (mon === 2) {
      if (day >= 30) return false
      // leap year
      var leap = (yea % 4 === 0 && yea % 100 !== 0) || yea % 400 === 0
      if (day === 29 && leap === false) return false
    }
    if (day === 31) {
      if (mon == 4 || mon === 6 || mon === 9 || mon === 11) return false
    }
    return mon >= 1 && mon <= 12 && day >= 1 && day <= 31 && sep0 === sep1
  }

  // hms: 2009-12-31 12:34:45
  ret = hms.exec(data)
  if (ret !== null) {
    prev = ret[1]
    if (numend.test(prev) === false) return false
    t = ret[2]
    hou = parseInt(ret[3])
    min = parseInt(ret[4])
    z1 = ret[5]
    sec = ret[7] !== undefined ? parseInt(ret[7]) : 0
    z2 = ret[8]
    // iso format declared with T or Z has restrictions
    if (t === 'T' || z1 === 'Z' || z2 === 'Z') {
      // slash are not allowed
      if (prev.indexOf('/') != -1) return false
      // hou min sec must be 2 digits
      if (ret[3].length == 1 || ret[4].length == 1) return false
      if (ret[7] !== undefined && ret[7].length == 1) return false
      // mon day must be 2 digits and sep must be hyphen
      if (isosim.exec(prev) === null) return false
    }
    return dateString(prev) && hou >= 0 && hou <= 23 && min >= 0 && min <= 59 && sec >= 0 && sec <= 59
  }

  // full: 2009-12-31T12:34:56.789Z
  ret = full.exec(data)
  if (ret !== null) {
    prev = ret[1]
    if (prev.charAt(4) === '/') return false
    mil = parseInt(ret[2])
    z1 = ret[3]
    return dateString(prev) && mil >= 0
  }

  return false
}

module.exports = dateString
