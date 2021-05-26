

var person = {
    age: 34,
    getDetails: function(name){
        return name + '' + this.age;
    }
}

var nameAndAge = person.getDetails;

console.log(person.getDetails())
console.log(person.getDetails('Ravi'))

//bind returns a new function.. 
var boundNameAndAge = nameAndAge.bind(person, 'Ravi')
console.log(boundNameAndAge())
// console.log(nameAndAge('Ravi'))