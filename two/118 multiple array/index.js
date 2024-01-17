var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
function sortedOfAge(arr) { //func takes arr
    return arr
        .filter(function(person) { //filter arr, element = person
            return person.age > 18; //return array of elements with age Num over 18
        })
        .sort(function(a, b) { //sort method, calls new function which will use a and b
            if (a.lastName < b.lastName) { //if a < b when comparing last names in lexographical orders, it moves down relative to b
                return -1;
            }
            if (a.lastName > b.lastName) { //if a > b when comparing last names lexographically, it moves up relative
                return 1;
            }
            return 0; //otherwise they do not move relative to each other
        })
        .map(function(person) { //map goes thru each element of the array (or person), in this case calling new func
            return '<li>' + person.firstName + ' ' + person.lastName + ' is ' + person.age + '</li>'; //return element/person with the other text into a sort of string.
        });
}



console.log(sortedOfAge(peopleArray));



