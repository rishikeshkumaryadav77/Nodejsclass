// function sum(a, b){
//   return a+b;
// }


// function sumParent(text, a, b, sum){
//   const result = sum(a,b)
//   console.log(text,result)
// }

// sumParent('The sum of a+b = ', 5, 7, sum);


//exporting module as common js
function greet(){
  return 'Hello, World!'
}

function greet2(){
  return 'namaste'
}

// module.exports = {greet, greet2}
module.exports = 'hi this is a module'