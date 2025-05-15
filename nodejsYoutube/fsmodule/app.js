//fs.Readfile

const fs = require('fs')

// fs.readFile('input.txt', 'utf-8', (err,data) => {      //asynchronous 
//   if(err) throw(err);
//   console.log(data)
// })

// const data = fs.readFileSync('input.txt', 'utf-8');  //synchronous
// console.log(data)


//fs.writefile

fs.writeFile('input.txt', 'removed content', (err) =>{
  if(err) throw(err)
})