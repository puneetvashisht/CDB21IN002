var person = {
    getDetails: function(company, department){
        return `Person ${this.name} ${this.age} works in ${company} ${department}`
    }
} 

var person1 = {
    name: "Ravi",
    age: 34
}

var person2 = {
    name: "Priya",
    age: 24
}

// call and apply execute the function immediately

console.log(person.getDetails())
console.log(person.getDetails.call(person1, "Oracle" ,"HR" ))
console.log(person.getDetails.call(person2, "Oracle" ,"HR"))


console.log(person.getDetails.apply(person1,["Oracle" ,"HR"] ))
console.log(person.getDetails.apply(person2, ["Oracle" ,"HR"] ))

