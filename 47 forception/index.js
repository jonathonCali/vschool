const readline = require('readline-sync')



// Write a function that takes two arrays as parameters. The first array will be an array of people's names, 
//and the second array will be the alphabet.
//Using a for loop within a for loop, create and return array that looks like this:
//function forception(people, alphabet){
    // your code here
//}
// Output:
//["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
//"U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
//"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
//"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I",
// "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:",
// "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



//I need to separate alphabet,
//I need to add a colon to the end of every string in the people array
//I need to make 'alphabet' loop after every 'people' string.



function forception(people, alphabet){ 
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"] //'people' array
var alphabet = "abcdefghijklmnopqrstuvwxyz" // 'alphabet' string

for (i=0; i < people.length; i++){ //for every index of the people array
    
    for (j=0; j<alphabet.length;j++){ //while going thru people array, at every piece of the alphabet string
console.log('"'+alphabet[j]+'"') //write the instance of the alphabet string to console, effectively a-z like so "[j]"
}

console.log('"'+ people[i]+':"') //write every instance of people array to console like so "index:"

}

}

console.log(forception()) 
//call foreception function, which writes whole alphabet like "[j]" after each piece of people array written like "index:"

