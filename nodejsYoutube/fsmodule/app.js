//fs.Readfile

const fs = require('fs')

// fs.readFile('input.txt', 'utf-8', (err,data) => {      //asynchronous 
//   if(err) throw(err);
//   console.log(data)
// })

// const data = fs.readFileSync('input.txt', 'utf-8');  //synchronous
// console.log(data)


//fs.writefile

// fs.writeFile('input.txt', 'removed content', (err) =>{
//   if(err) throw err
// })


//appendfile
// fs.appendFile('input.txt', '\n this is third line line', (err) => {
//   if(err) throw(err)
//     console.log('text added')
// })


// fs.appendFile('input.txt', '\n jfuwerfwueklil lkqDRISHI', (err) =>{
//   if(err) throw(err)
//   console.log('data added')
  
// })

//unlink
fs.unlink('input.txt', (err) =>{
  if(err) throw err
})
