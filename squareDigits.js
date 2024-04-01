
function squareDigits(num){
  return +num.toString().split('').map(a=>a**2).join("");
}

