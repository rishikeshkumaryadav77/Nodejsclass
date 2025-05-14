function sum(a, b){
  return a+b;
}


function sumParent(text, a, b, sum){
  const result = sum(a,b)
  console.log(text,a, b, result)
}

sumParent('hii this sum of a+b = ', 5, 7, sum);