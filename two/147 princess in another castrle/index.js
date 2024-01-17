// Create a class for a player that has the following properties:
// - `name` of type `String`
// - `totalCoins` of type `Number`
// - `status` of type `String` (options are `Powered Up`, `Big`,`Small`, and `Dead`)
// - `hasStar` of type `Boolean` (Is a star active?)
// - `setName` of type `function` - Has a parameter called `namePicked` where you pass in "Mario" or "Luigi". Sets `name` to "Mario" or "Luigi".
// - `gotHit` of type `function` - this is called whenever the player is hit by an enemy. `gotHit()` will set the `status` property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
// - `gotPowerup` of type `function` - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)
// - `addCoin` of `function` - adds a coin to totalCoins
// - `print` of type `function` - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:
//     - Name: Luigi,
//     - Status: Small, etc, etc


class Player {
    constructor() {
        this.name = "";
        this.totalCoins = 0;
        this.status = "Small"; // Possible values: "Powered Up", "Big", "Small", "Dead"
        this.hasStar = false; // Boolean value
    }

    setName(namePicked) {
        if (namePicked === "Mario" || namePicked === "Luigi") {
            this.name = namePicked;
        }
    }

    gotHit() {
        if (this.hasStar) {
            console.log("Your star protected you!");
            this.hasStar = false;
        } else {
            if (this.status === "Powered Up") {
                this.status = "Big";
            } else if (this.status === "Big") {
                this.status = "Small";
            } else if (this.status === "Small") {
                this.status = "Dead";
            }
        }
    }

    gotPowerup() {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        } else if (this.status === "Powered Up") {
            this.hasStar = true;
            console.log("You got a Star!");
        }
    }

    addCoin() {
        this.totalCoins++;
    }

    print() {
        console.log(`Name: ${this.name}\nTotal Coins: ${this.totalCoins}\nStatus: ${this.status}\nStar: ${this.hasStar}\n`);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let player = new Player();
player.setName("Mario");

let interval = setInterval(() => {
    let action = getRandomInt(0, 2);
    if (player.status === "Dead") {
        clearInterval(interval);
        console.log("Game Over");
    } else {
        if (action === 0) {
            player.gotHit();
        } else if (action === 1) {
            player.gotPowerup();
        } else if (action === 2) {
            player.addCoin();
        }
        player.print();
    }
}, 1000); // Interval set to 1000 milliseconds (1 second)

// Use that class to create the object.

// Create a [random range function](http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range) that returns either 0, 1, or 2.

// If the value is 0 call the `gotHit()` function on the object. If the value is 1 call the `gotPowerup()` function on the object. If the value is 2 call the `addCoin()` function

// Then call the print method on the object.

// Now put the random range function inside a `setInterval` function that ends after the player is dead

// The end product will look something like this:

// class MotorCycle {
//     constructor (make, model, hasSideCar){
//         this.make = make;
//         this.model = model;
//         this.hasSideCar = hasSideCar;
//     }

//     drive() {
//         console.log("vroom");
//     }
// }

// class Vehicle {
//     constructor(args) {
//       this.make = args.make;
//       this.model = args.model;
//     }
  
//     drive(){
//       console.log("vroom");
//     }
//   }
  
//   class MotorCycle extends Vehicle {
//     constructor (args){
//       super(args);
//       this.hasSideCar = args.hasSideCar;
//     }
//   }
  
//   var motorCycle = new MotorCycle({make:"Honda", model:"Shadow", hasSideCar:false});
  
//   console.log(motorCycle.hasSideCar);  // false
//   console.log(motorCycle.make);        // Honda
//   console.log(motorCycle.model)        // Shadow
//   motorCycle.drive()                   // vroom
  
