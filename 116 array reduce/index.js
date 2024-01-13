// function total(arr) { //func needs arr
//     return arr.reduce(function(acc, num) { //reduce method. each element is num, the total when reduce is running thru each element is acc, a function is called which uses both
//         return acc + num; //add num to the accumulator
//     }, 0); //starts off w 0 initially
// }

  
//   console.log(total([1,2,3])); // 6

  
//   function stringConcat(arr) { //func needs arr
//     return arr.reduce(function(acc, num) { //reduce method, calls func which uses acc and num/element
//         return acc + num.toString(); //num/element is converted to a string, and this is added to the total/acc
//     }, ''); //acc starts as '', or blank
// }

  
//   console.log(stringConcat([1,2,3])); // 123
  


//   function totalVotes(arr) { //func needs arr
//       return arr.reduce(function(acc, voter) { //reduce method. func needs accumulator and each element of orig arr named voter
//           if (voter.voted) { //if voter.voted is true
//               return acc + 1; //accumulator adds 1
//           } else { //if not
//               return acc; //acc stays same
//           }
//       }, 0);//acc starts at 0
//   }

//   var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}]
//   console.log(totalVotes(voters)); // 7


//   function shoppingSpree(arr) { //func needs arr
//     return arr.reduce(function(acc, item) { //reduce method, elements = item
//         return acc + item.price; //add each element 'price' to acc
//     }, 0); //acc starts at 0
// }

  
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
//   console.log(shoppingSpree(wishlist)); // 227005

  
// function flatten(arr) { //func needs arr
//     return arr.reduce(function(acc, subArray) { //reduce method, new func requires accumulator and each element = subArray
//         return acc.concat(subArray); //concatenate each subArray to the acc
//     }, []); //acc starts as [] or new blank array
// }

  
//   var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];
//   console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

  
  function voterResults(arr) { //func requires arr
    return arr.reduce(function(acc, voter) { //reduce method, calls function which uses accumulator and each arr element or voter
      if (voter.age >= 18 && voter.age <= 25) { //if arr element (voter) is >= 18 and <= 25
        acc.numYoungPeople++; //accumulator named numYoungPeople is added to +1
        if (voter.voted) acc.numYoungVotes++; //if within the previous if, voter.voted is true, acc called numYoungVotes is added to +1
      } else if (voter.age >= 26 && voter.age <= 35) { //if element/voter age is >= 26 and <= 35
        acc.numMidsPeople++; //acc called numMidsPeople +1
        if (voter.voted) acc.numMidVotesPeople++; //if within previous if, voted = true, acc called numMidVotesPeople +1
      } else if (voter.age >= 36 && voter.age <= 55) { //if age is >= 36 and <= 55
        acc.numOldsPeople++; //acc called numOldsPeople +1
        if (voter.voted) acc.numOldVotesPeople++;//if among previous if paramaters, element's voted = true, add to acc called numOldVotesPeople
      }
      return acc; //return the accumulators 
    }, { numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0 }); //the "sub" accumulators are all initialized at 0
  }
  
  var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
  