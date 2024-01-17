
function sum(x, y){ //func takes 2 parameters
  if(typeof x === 'number' && typeof y === 'number'){ //if are type number
    return x + y; //return their sum
} else { //else if not both strictly numbers
      throw new Error('Does not compute'); //throw new error message
  }
}

try { //trying
  console.log(sum("1", "2")); //sum func with strings '1' and '2'
} catch (error) { //if error is thrown in function with above parameters
  console.log('Error:', error.message); //log string 'error:' + func new error message
}

var user = {username: "sam", password: "123abc"}; //user object
function login(username, password){ //func called login which takes user properties
        if(username === user.username && password === user.password){ //if username and password match 'user' properties for both
            console.log("login successful!") //login successful displayed on console
        } else { //if either or both do not match
            throw new Error('Invalid Username or Password'); //new error shown
        }
        
}



  try { //try block
    login("wrongUser", "wrongPassword"); //try login function with mismatching properties
  } catch (error) { //called if error is thrown in function
    console.log(error.message); //display said function's error message on console
    login('sam','123abc') //try login function with identical properties to original variable
  } 
