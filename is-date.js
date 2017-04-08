module.exports = function(data) {
  return data != null
    && data instanceof Date
    && data.getTime() === data.getTime()
}
