var person = {name: "Ravi"};
console.log(person)

function Person(name, age){
    this.name = name;
    this.age = age;
    this.toString = function(){
        return `String representation name : ${this.name}, age: ${this.age} `
    }
}


// function Employee(name){
//     console.log(this);
//     console.log(name);
// }
// Employee("Rahul");


Person.prototype.getName = function(){return this.name}; 
console.log(Person.prototype)

var person1 = new Person("Ravi", 34);
var person2 = new Person("Priya", 23);
console.log(person1.toString())


Person("Priya", 23);

// console.log(person1.getName());
// console.log(person2.getName());