// Challenge 1:  Constructor Functions

// Create a constructor function called **`Book`** that takes in parameters for **`title`**, **`author`**, and **`year`**. 
// The constructor function should have a method called **`getDetails`** that returns a string with the book's title, author, and year. 
//  Instantiate two new Books using the below code to test your solution.  


// console.log(book1.getDetails()); // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925



// console.log(book2.getDetails()); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960


// function Book(title, author, year){
//   this.title=title
//   this.author=author
//   this.year= year
//   this.getDetails = function(){
//     return ('the title is '+ this.title + '. The author is '+ this.author + '. The year published is ' + this.year)
//   }
// }


// var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
// const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// console.log(book2.getDetails());


// Write a function called findEvenNumbersthat takes in an array of numbers and returns a 
// new array containing only the even numbers from the input array. Can you implement this function using arrays and 
// loops? Remember to consider the condition for determining even numbers.  Use the below code to test your solution.


function findEvenNumbers(arr) {
    var evenNum = []
    for(let i=0;i<findEvenNumbers.length; i++){
        const num = arr[i]
     if(num % 2 === 0 ){
        evenNum.push(num)
     }
    }
    return evenNum
    }

    // Function to find even numbers

function findEvenNumbers(arr) {
    const evenNumbers = []; //empty array,assigned to the variable evenNumbers
    for (let i = 0; i < arr.length; i++) { //conditions for the for loop (where it starts, how long, for what count)
      const num = arr[i]; //assigning current num of array to the varialbe which is 'num'
      if (num % 2 === 0) { //conditions for if statement, if num/2 has remainder of 0, then the if function is called
        evenNumbers.push(num); //adds the even number to the 'evenNumbers' array
      }
    }
  
    return evenNumbers; //returns the value after having run through the function
  }
  console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10])) // Expected Output:  [2,4,6,8,10]
 console.log(findEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99, 100])) // Expected Output:  [22, 44, 66, 88, 100]


//review top function
//go over basic data types
// go over array methods
//problem solving process at beginning of 1