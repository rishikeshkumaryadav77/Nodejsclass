//exporting by using type="module"
// export const greaterNum =(a,b) =>{
// if (a>b){
//   return true
// }
// else{
//   return false
// }
// }

//export by using type = "commonjs"
const Num = (a, b) => a + b;
const greaterNum = (a, b) => a > b;

module.exports = { Num, greaterNum };
  