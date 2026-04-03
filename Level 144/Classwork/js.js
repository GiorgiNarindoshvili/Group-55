/*   1. https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript


 
    function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}







 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  let arr1 = 0
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      [arr[arr1], arr[i]] = [arr[i], arr[arr1]]
      arr1++;
    }
  }
  return arr
}







*/