const readline = require('readline-sync')

const name = readline.question("What is your name? ");
console.log(`Hello ${name}! You are trapped in this room and must find your way out`);

//make it as a question where they can either do a, b, or c

var hasKey = false
while(hasKey === false){
    const prompt = readline.keyIn("Would you like to a) Find key, b) Open door, or c) Put hand in hole?")

    if (prompt === 'a') { 
        console.log('you found the key!')
        hasKey = true
        } else if (prompt === 'b') {
                console.log(`${name} tries to open the door. The door is locked!`)
            } else if (prompt === 'c'){
                console.log("You die!!!!");
                process.exit()
                
                } else {
                    console.log("Invalid input");
                    };
}
while(hasKey === true){
    const prompt = readline.keyIn("Would you like to a) Find key, b) Open door, or c) Put hand in hole?")
    if (prompt === 'a') { 
        console.log('you found the key!... again.')
        } else if (prompt === 'b') {
                    console.log("The door opens.")
                    process.exit()
                
            } else if (prompt === 'c'){
                console.log("You die!!!!");
                process.exit()
                
                } else {
                    console.log("Invalid input");
                    };
}