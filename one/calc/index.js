const readline = require('readline-sync')

const num1 = parseFloat(readline.question("please enter first number ")); //takes first string, which must be a Num
const num2 = parseFloat(readline.question("please enter your second number ")) //second Num
const operant = ['add','subtract','multiply','divide'] //options 0-3, 0[keyIn 1]/1[ KeyIn 2], etc.
const index = readline.keyInSelect(operant,'which operation would you like to execute? Please select 1-4')

let result = [] //result can equal any Num
if (index === 0) { //keyIn '1'
    result = num1 + num2; //result = addition of Nums
} else if (index === 1) { //keyIn 2
    result = num1 - num2; //result = subtract Nums
} else if (index === 2) { //keyIn 3
    result = num1 * num2; //result = multiply Nums
} else if (index === 3) { //keyIn 4
    result = num1 / num2; //result = divide Nums
}
console.log(result); //return the new 'result' Num