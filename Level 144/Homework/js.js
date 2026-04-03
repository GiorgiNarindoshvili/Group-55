/* 1. https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
  name = name.toUpperCase()
  name = name.split(" ")
  name1 = name[0][0]
  lastname1 = name[1][0]
  return name1 + "." + lastname1
  
}




2. https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  let sum = 0
  
  for(let i = 0; i < arr.length; i++)
    
    if(arr[i] > 0){
      sum += arr[i]
    }
  return sum
}




3. https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript


function getSum(a, b){
   let min = Math.min(a, b)
   let max = Math.max(a, b)
   let sum = 0
  
  for(let i = min; i <= max; i++){
    sum += i
  }
  return sum
}



4. https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript



function findOdd(A) {
  for(let i = 0; i < A.length; i++){
    let count = 0
    for(let j = 0; j < A.length; j++){
      if(A[i] === A[j]){
        count++
      }
    } 
    if(count % 2 !== 0){
      return A[i]
    }
  }
}




5. https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python


def to_camel_case(text):
    words = text.replace('-', '_').split('_')
    
    result = words[0]
    
    for word in words[1:]:
        result += word.capitalize()
    
    return result

*/