const readline = require('readline-sync')

var fruit = ["banana", "apple", "orange", "watermelon"]; //array of 'fruit'
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; //array of 'vegetables'
// console.log("fruit: ", fruit); //write on DOM starting with "fruit: " followed by "[fruit]"
// console.log("vegetables: ", vegetables); //write on DOM start w "vegetables: " followed by "[vegetables]"

// 1. Remove the last item from the vegetable array.
vegetables.pop() //.pop removes last item of array [lettuce]
console.log(vegetables)
// 2. Remove the first item from the fruit array.
fruit.shift(); //.shift removes first item of array [banana]
console.log(fruit);
// 3. Find the index of "orange."
let orangeIndex = fruit.indexOf("orange"); //orange is now second in line, making it index of 1
console.log(orangeIndex)
// 4. Add that number to the end of the fruit array.
fruit[fruit.length] = orangeIndex;//fruit.length = 3. at index 3 of fruit array (currently nothing), the number 1 is added to the array
console.log(fruit);
// 5. Use the length property to find the length of the vegetable array.
let vegLength = vegetables.length; //new variable equals vegetables.length which is 3
console.log(vegLength);
// 6. Add that number to the end of the vegetable array.
vegetables[vegLength] = vegLength; //vegetables at index 3, add the number 3
console.log(vegetables);
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
food = fruit.concat(vegetables) //add veg array onto fruit array
console.log(food)
// 8. Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4,2) //remove item(s) starting index 4 (0, 1, 2, 3, 4), and for a length of 2 total
console.log(food)
// 9. Reverse your array.
food.reverse(); 
console.log(food)
// 10. Turn the array into a string and return it.
newFood = food.join(", ") 
console.log(newFood)
// If you've done everything correctly, the last step should print the following string to the console:
// 3,pepper,1,watermelon,orange,apple
