function product (...args) {
  return args.reduce((currentValue, arg) => currentValue * arg, 1)
}

function sum (...args) {
  return args.reduce((currentValue, arg) => currentValue + arg, 0)
}

module.exports = {
  product,
  sum
}
