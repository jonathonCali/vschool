const readline = require('readline-sync')




function Employee(name, age, position){ //constructor function Employee with vars name, age, position

    this.name = name; //whatever someone puts + .name, is the name
    this.age = age; //same as above for but for age var
    this.position = position; //same as above but for position var
    this.time = "Full Time"; //var "time" is string "Full Time"
    this.printEmployeeForm = function(){
        return ('Name:'+ this.name+ '. Age:' + this.age + '. Position' + this.position + '. full/part-time: ' + this.time)
    }
    if(this.name === "Jill"){
        this.time = "Part time"
    }
    
    
     }

     function allForms(){
        return [employee1.printEmployeeForm(), employee2.printEmployeeForm(), employee3.printEmployeeForm()]
     }
     var employee1 = new Employee("Bob", "28", "Interpreter")
     var employee2 = new Employee("Jill", "35", "Teacher")
     var employee3 = new Employee("Ross", "49", "Janitor")

var allFormArray = allForms()
var allFormString = allFormArray.join(', ')

console.log(allFormString)