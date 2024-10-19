const custom = customerRequireFunction('./codeSnippet.js')

console.log(custom.sum())

function customerRequireFunction (path) {
  const fs = require('fs')
  const fileContent = fs.readFileSync(path).toString()
  // console.log(fileContent)

  return (function (mathObject, otherObjects) {
    eval(fileContent)
    return mathObject
  })({})
}
