
const isNativeCode = function (code) {
  return typeof code === 'function' && /native code/.test(code.toString())
}

export {
  isNativeCode
}
