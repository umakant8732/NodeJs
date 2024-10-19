// whenever we run the node js file it wrap all the code inside the module wrapper function
// now all the created variable are inside the local environment of that wrapper function
// which is why we get to see variable in local scope when we use debugger

// example

// (function (exports, require, module, __filename, __dirname) {
//   a = 45
//   console.log(a)
// })

console.log(__filename);
console.log(__dirname);


