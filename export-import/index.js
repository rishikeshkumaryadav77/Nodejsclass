// imported by using type="module" 
// import {greaterNum} from "./operaton.js";
// console.log(greaterNum(1, 8));


// imported by using type="commonjs" 
const { Num, greaterNum } = require("./operaton.js");
console.log(Num(3, 6)); // Output: 9
console.log(greaterNum(3, 6)); // Output: false