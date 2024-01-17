const readline = require('readline-sync')

for(i=1;i<100;i++){
   
        var output=""
        if(i%3!=0&&i%5!=0){
            output = i
        }
       else if(i%5===0&&i%3===0){
            output="fizzbuzz"
        }
       else if(i%5===0&&i%3!=0){
            output= "buzz"
        }
       else if(i%3===0&&i%5!=0){
            output="fizz"
        }
        

        console.log(output)
    }
