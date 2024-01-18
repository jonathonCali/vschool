// function fiveAndGreaterOnly(arr) { //function needs array
//   return arr.filter(function(num) { //filter function calls new function for each element/num
//       return num >= 5; //if num is greater than or equal to 5, it passes to new filtered arr
//   });
// }
  
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); // [6, 8]
  
//   function fiveCharactersOrFewerOnly(arr) { //function needs array
//     return arr.filter(function(str) { //filter array method, where each arr element = str, for which new function is called.
//         return str.length <= 5; //if element's length is less than or equal to 5, added to new filtered array.
//     });
// }

  
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["dog", "wolf", "by", "eaten"]

  
//   function peopleWhoBelongToTheIlluminati(arr) { //function needs array
//     return arr.filter(function(person) { //filter method for new array, calls new func thru each element/person
//         return person.member; //if person.member is a valid statement/true, added to filtered arr.
//     });
// }

  
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));
// => [ { name: 'Angelina Jolie', member: true }, { name: 'Paris Hilton', member: true }, { name: 'Bob Ziroll', member: true } ]

//   function ofAge(arr) { //func requires array
//     return arr.filter(function(person) { //filter method, new func is called for each element/person
//         return person.age > 18; //if person.age is greater than 18, added to new filtered array
//     });
// }

  
//   console.log(ofAge([
//       { name: "Angelina Jolie", age: 80 },
//       { name: "Eric Jones", age: 2 },
//       { name: "Paris Hilton", age: 5 },
//       { name: "Kayne West", age: 16 },
//       { name: "Bob Ziroll", age: 100 }
//   ]));
  //[ { name: 'Angelina Jolie', age: 80 }, { name: 'Bob Ziroll', age: 100 } ]
  