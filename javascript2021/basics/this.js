console.log(this);

function test(){
    return "abc"
}

var test = () => "abc"
test();



var person = {
    name: "Ravi",
    age: 34,
    get firstname(){
        return this.name;
    },
    set firstname(name){
        this.name = name;
    },
    getDetails: function(){
        return `Person ${this.name} ${this.age}`
    }
} 


person.firstname = "Priya"
console.log(person)


var arr =  ["Monday", "Tuesday", "Wednesday", "Thursday"]
var list = arr.filter(function(value, i){
    return value.startsWith("T");
}) 
console.log(list)