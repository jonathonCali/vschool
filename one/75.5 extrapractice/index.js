const readline = require('readline-sync')


// Write a function that takes an array of numbers and returns the largest (without using `Math.max()`)

// function findLargest(arr){  //function 'findLargest' goes thru the array 'ar'
//     let maxNum= arr[0];   //set variable 'maxNum' to first element in array 'arr'
//     for(let i =1; i<arr.length;i++){  //for loop starts at index 1, ends before
//         if(arr[i]>maxNum){     //if current number is greater than 'maxNum', set 'maxNum' equal to
//             maxNum=arr[i];      //current number
//             }
// }
// return maxNum;       //return value of 'maxNum' as the largest number
// }
// console.log(findLargest([6, 13, 250, 30])) 
// console.log(findLargest([3, 5, 2, 8, 1])) 
// console.log(findLargest([-13, 40, 3, 0, 19, 22])) 



// Write a function that takes an array of words and a character and returns each word that has that character present.
// function lettersWithStrings(words, char) {
//     const result = [];
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].includes(char)) {
//         result.push(words[i]);
//       }
//     }
  
//     return result;
//   }
  
// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"))// => ["$hello!", "test!"]
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []





// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(num1,num2){
    var result = ""
    if((num1 % num2 == 0)){
        result = true        
    } else {
        result = false    
}
    return result
}



// console.log(isDivisible(4, 2)) // => true
// console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false

