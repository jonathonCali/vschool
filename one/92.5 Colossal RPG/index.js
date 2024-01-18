const readline = require('readline-sync')

console.log('Welcome to Colossus!')
var name = readline.question("What is your name? ");
var yourHealth = 100
var foeHealth = 100
var trinkets = 0
function attackFunc() {
    console.log('foe attacks')
    var foesAttack = Math.floor((Math.random() * 100))

        if(foesAttack < yourHealth){
            yourHealth = yourHealth - foesAttack
            console.log('the foe attacked you for', foesAttack, 'Your health now stands at: ', yourHealth)
            console.log(defFunc())
    } else if(foesAttack > yourHealth){
        console.log('foe attacks for', foesAttack, 'you have died with', trinkets,'trinkets')
        process.exit()
    }
        }
function defFunc(){
    console.log('You attack')
        var yourAttack = (Math.floor((Math.random() * 50)) + 25)
                
                if(yourAttack < foeHealth){
                    foeHealth = foeHealth - yourAttack
                    console.log('you attack for ', yourAttack,"Foe's health now stand's at: ", foeHealth)                    
                    console.log(attackFunc())
        } else if(yourAttack>foeHealth){
            foeHealth = 100
            yourHealth = yourHealth+30
            trinkets += 1
            console.log('you attack for ',yourAttack,' and killed the foe! You gain 30 HP and a trinket!')
            console.log(walkText())
        }
    }

function walkText(){
   var input = readline.keyIn('would you like to walk? Press w to walk.')

if (input == 'w'){
var encounter = Math.floor((Math.random() * 4) + 1);
if(encounter === 1 || encounter === 2 || encounter === 3){
        console.log('You are walking peacefully.')
        console.log(walkText())
    }
    else{
function foePrompt(){ 
  var foeInput = readline.keyIn('you encountered a foe! What would you like to do? You may press r to run, or a to attack!')

        if(foeInput === 'r'){
            var runAttempt = Math.floor((Math.random() * 2)+1)
            if(runAttempt === 1 ){
                console.log('you got away')
                console.log(walkText())
            }
            else{
                console.log('you were caught by the foe and must fight')
                console.log(attackFunc())}
            }
        else if(foeInput === 'a'){
                console.log(defFunc())
            }
        else{
            console.log('Invalid input, please enter r or a for running or fighting respectively')
            console.log(foePrompt())
                }
            }
            console.log(foePrompt())
    }
}else{
    console.log("invalid input")
    }
}
while(yourHealth>0){
console.log(walkText())
}






// Console must greet player with a fun message 

// Console must ask for the player's name and store it 



// The console will ask the user to enter a "w" to walk

// Every time the player walks, a random algorithm will be run that determines
//  if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)

//  Use a while loop to control this flow.




//  The enemy is random (can be chosen out of a minimum of 3 different enemy names)

//  The user can decide to attack or run

//  If attacking, a random amount of damage will be dealt between a min and max

//  If running, there will be a 50% chance of escaping

//  After the player attacks or runs the enemy attacks back for a random damage amount

//  The player and enemy will attack each other in a loop until one of them passes out or dies. 

//  If the player kills the enemy you can give the Player some HP and special item that is stored in the inventory . 
//  After this, the player will continue walking. 

//  If the enemy kills the player the console prints a cool death message and the game ends



//  When the player kills enemies, they are awarded with items (optional)

//  If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory 