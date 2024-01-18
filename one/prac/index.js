const readline = require('readline-sync')

// var vegetables = ["carrot", "tomato", "lettuce"]


// for (var i = 0; i < vegetables.length; i++) {
//     console.log(vegetables[i]);
// }


// vegetables.forEach(function(vegetable) {
//     console.log(vegetable);
// });
// var alphabet = "abcdefghijklmnopqrstuvwxyz"
// console.log(alphabet.length)

// var numbers = [1, 2, 3];
// var doubledNumbers = [];

// for (var i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }

// console.log(doubledNumbers);

// var doubledNumbers = numbers.map(function(number) {
//     return number * 2;
//   })

var alphabet = "abcdefghijklmnopqrstuvwxyz"

alphabet.map(f=>{ return f.toUpperCase()})