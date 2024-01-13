// const personName = "John"
// const age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let petName;
//         if (pets[i] === "cat") {
//             petName = "fluffy"
//         } else {
//             petName = "spot"
//         }
//         console.log("pet name: ", petName)
//         pet.name = petName
//         petObjects.push(pet)
//     }
//     console.log("man name: ",personName)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// const carrots = ["bright orange", "ripe", "rotten"]

// // function mapVegetables(arr) {
// //     return arr.map(function(carrot) {
// //         return { type: "carrot", name: carrot }
// //     })
// // }
// const mapVegetables = arr => arr.map(carrot => ({ type: "carrot", name: carrot }))
// console.log(mapVegetables(carrots));

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

// // function filterForFriendly(arr) {
// //     return arr.filter(function(person) {
// //         return person.friendly
// //     })
// // }
// const filterForFriendly = arr => arr.filter(person => person.friendly)
// console.log(filterForFriendly(people));

// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }
// const doMathSum = (a, b) => a + b;

// const produceProduct = (a, b) => a * b;

// const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
//     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
// };

// console.log(printString("Kat", "Stark", 40)); // Example usage

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];
const filterForDogs = arr => arr.filter(animal => animal.type === "dog");

console.log(filterForDogs(animals));