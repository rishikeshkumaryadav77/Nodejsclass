//fs.Readfile

const fs = require('fs')

// fs.readFile('input.txt', 'utf-8', (err,data) => {
//   if(err) throw(err);
//   console.log(data)
// })

const data = fs.readFileSync('input.txt', 'utf-8');
console.log(data)