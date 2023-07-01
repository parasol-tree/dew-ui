const getType = function (data) {
  const type = typeof data
  if (type !== 'object') {
    return type
  }
  const res = Object.prototype.toString.call(data)
  return res.slice(8, res.length - 1).toLowerCase()
}

export {
  getType
}
