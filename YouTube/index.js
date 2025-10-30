// const fs = require('fs')

// let a = 4
// let b = 5
// const data = `sum: ${a+b}`
// console.log(data)

// fs.writeFile('data.txt', data, (err) =>{
//   if (err) throw err;
//   console.log(written in file)
// })

// Array
const colors = ['red', 'green', 'blue'];

// Array methods (ES6+)
colors.forEach(color => console.log(color));
const lengths = colors.map(color => console.log(color.length));