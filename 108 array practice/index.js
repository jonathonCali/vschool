// function doubleNumbers(arr){ //function, which needs an array input
//     return arr.map(num => num * 2); //goes thru array, num is autoassigned
//   }
//   console.log(doubleNumbers(["2", 5, 100])); // [4, 10, 200]
  

  // function stringItUp(arr){ //function needs array [] input
  //   return arr.map(num => num.toString()); //num autoassigned, converts to a string at each
  // }
  
  // console.log(stringItUp([2, 5, 100]))  

  // function capitalizeNames(arr) { //function, needs array
  //   return arr.map(function(name) { //map function, each iteration is called 'name' and it is called for another function
  //     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); //capitalized every first letter. Slices/deletes the 1 index letter, else it the index 0 letter would repeat itself.
  // }); 
  // }
  
  // console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer"]))
  

// function namesOnly(arr){ //function, needs array
//      return arr.map(function(obj) { //new function, goes thru every iteration of array naming each 'obj'
//     return obj.name; //at every obj, return only the name or obj.name
//   });  
// }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
  
//   function makeStrings(arr) { //function called, requires array
//     return arr.map(function(obj) { //each iteration of array is 'obj', function of obj called
//         if (obj.age >= 18) {  //if obj's age is over 18
//             return obj.name + " can go to The Matrix"; //return this string
//         } else { //if the above doesn't apply...
//             return obj.name + " is under age!!"; //return this string
//         }
//     });
// }

  
//   console.log(makeStrings([
//       { name: "Angelina Jolie", age: 80 },
//       { name: "Eric Jones", age: 2 },
//       { name: "Paris Hilton", age: 5 },
//       { name: "Kayne West", age: 16 },
//       { name: "Bob Ziroll", age: 100 }
//   ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]

  // function readyToPutInTheDOM(arr) { //function, needs array
  //   return arr.map(function(obj) { //call each iteration, named 'obj' to new function
  //     return `<h1>${obj.name}</h1><h2>${obj.age}</h2>`; //return this string with the obj's variables 'name' and 'age' within it
  // });  }
  
  // console.log(readyToPutInTheDOM([
  //     { name: "Angelina Jolie", age: 80 },
  //     { name: "Eric Jones", age: 2 },
  //     { name: "Paris Hilton", age: 5 },
  //     { name: "Kayne West", age: 16 },
  //     { name: "Bob Ziroll", age: 100 }
  // ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
  
  