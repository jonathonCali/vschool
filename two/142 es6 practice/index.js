// const name = "John";
// const age = 101;

// function runForLoop(pets) {
//     const petObjects = [];
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] };
//         let petName;
//         if (pets[i] === "cat") {
//             petName = "fluffy";
//         } else {
//             petName = "spot";
//         }
//         console.log("pet name: ", petName);
//         pet.name = petName;
//         petObjects.push(pet);
//     }
//     console.log("man name: ", name);
//     return petObjects;
// }

// runForLoop(["cat", "dog"]);

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// const mapVegetables = (arr) => {
//     return arr.map(carrot => ({ type: "carrot", name: carrot }));
// }
// console.log(mapVegetables(carrots))

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }
// const filterForFriendly = arr => {
//     return arr.filter(person => person.friendly)
// }
// console.log(filterForFriendly(people));

// function doMathSum(a, b) {
//     return a + b
// }
// const doMathSum = (a, b) => {return a + b}
// console.log(doMathSum(2,100))

// var produceProduct = function(a, b) {
//     return a * b
// }
// const produceProduct = (a,b) => {return a * b}
// console.log(produceProduct(3,6))


// function ageGreeting(x = 'jane', y = 'doe', z = 100) {
//     return `Hello ${x} ${y}, how does it feel to be ${z}?`;
// }
// console.log(ageGreeting("kat","Stark",50))

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          } 
//      })
//  }
 
// const filterForDogs = arr => {return arr.filter(animal =>(animal.type==='dog'))}
// console.log(filterForDogs(animals))
