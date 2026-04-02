/*
1. def add_binary(a,b):
    su = a + b
    su = bin(su)
    return su[2:]




2  https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num){
  let res = ""
  num = String(num)
  for(let i = 0; i < num.length; i++){
    res += String(num[i] ** 2)
    
  }
  return Number(res)
}




3 https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  let spl = str.split(" ")
  let rev = spl.map(word => word.split("").reverse().join(""))
  return rev.join(" ")
  
}




4 https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n){
    let count = 0
    
    
    for(let i = 1; i * i <= n; i++){
      if(n % i == 0){
        count += (i * i === n) ? 1 : 2;
      }
    }
  return count
}

*/