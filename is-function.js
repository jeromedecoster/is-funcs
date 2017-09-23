/**
 * Check if `data` is a Function defined by the developper. Standard built-in objects are excluded
 * @param {function} data
 * @return {boolean}
 */
module.exports = function(data) {
  return (
    typeof data === 'function' &&
    data !== Function &&
    data !== Object &&
    data !== String &&
    data !== Array &&
    data !== Boolean &&
    data !== Number &&
    data !== Date &&
    data !== RegExp &&
    (typeof Promise === 'function' && data !== Promise) &&
    data !== eval &&
    data !== isFinite &&
    data !== isNaN &&
    data !== parseFloat &&
    data !== parseInt &&
    data !== decodeURI &&
    data !== decodeURIComponent &&
    data !== encodeURI &&
    data !== encodeURIComponent &&
    data !== Error &&
    data !== EvalError &&
    data !== RangeError &&
    data !== ReferenceError &&
    data !== SyntaxError &&
    data !== TypeError &&
    data !== URIError &&
    (typeof Map === 'function' && data !== Map) &&
    (typeof Set === 'function' && data !== Set) &&
    (typeof WeakMap === 'function' && data !== WeakMap) &&
    (typeof WeakSet === 'function' && data !== WeakSet) &&
    (typeof Symbol === 'function' && data !== Symbol) &&
    (typeof Int8Array === 'function' && data !== Int8Array) &&
    (typeof Uint8Array === 'function' && data !== Uint8Array) &&
    (typeof Uint8ClampedArray === 'function' && data !== Uint8ClampedArray) &&
    (typeof Int16Array === 'function' && data !== Int16Array) &&
    (typeof Uint16Array === 'function' && data !== Uint16Array) &&
    (typeof Int32Array === 'function' && data !== Int32Array) &&
    (typeof Uint32Array === 'function' && data !== Uint32Array) &&
    (typeof Float32Array === 'function' && data !== Float32Array) &&
    (typeof Float64Array === 'function' && data !== Float64Array) &&
    (typeof ArrayBuffer === 'function' && data !== ArrayBuffer) &&
    (typeof DataView === 'function' && data !== DataView) &&
    (typeof Proxy === 'function' && data !== Proxy)
  )
}
