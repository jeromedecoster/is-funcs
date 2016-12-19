module.exports = function(...args) {
  return args.length !== 0 && args.every((arg) => {
    return typeof arg === 'number'
      && arg === arg
  })
}
