const readline = require('readline-sync')


// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];//array

// var computerCount = 0;//variable set to 0

// for (var i = 0; i < officeItems.length; i++) { //calling/going thru the array
//     if (officeItems[i] === "computer") {  //if at current index, it says "computer"
//          computerCount++; //computerCount is now +1
//     }
    
// }
// console.log(computerCount); //says how many times it says "computer" in array

var peopleWhoWantToSeeMadMaxFuryRoad = [ //array name
    {
      name: "Mike", //array.name = string
      age: 12, //array.age = Num
      gender: "male" //array.gender = string
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]


function validID() { //new function name
    var olderPeople = [] //empty new array
    for (let i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) { //go thru every part of original array and each sub part (name, age, gender)
        let person = peopleWhoWantToSeeMadMaxFuryRoad[i] //name variable for each part of array 
        if (person.age > 18) { //if said part of array.age is a Num over 18
            olderPeople.push(person) //add this part of original array to the new olderPeople array
            }  
            }
            return olderPeople //return new array after going thru old one
            }
            console.log(validID()) //call function, which goes thru old array and makes new array
