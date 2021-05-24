console.log('testing')

// class Person{
//     String name;
//     int age;
// getName(){
//     return this.name
// }
// }




var person = {name:"Ravi"};
// var findName=  function(){ return this.name}
person.prototype.findName = function(){ return this.name}

console.log(person.findName());

person.id= 10001
// delete person.name;
console.log(person)
console.log(typeof(person));


var person1 = {name: "Priya", age: 34, findName: findName };
console.log(person1);
console.log(person1.findName())

console.log(person.findName())

function sum(x,y){
    console.log(x+y)
}

var sum= function(x,y){
    console.log(x+y)
}
console.log(typeof(sum));