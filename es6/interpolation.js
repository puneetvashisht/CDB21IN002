var x = 34;

var str = "User age is _ years old"

var newStr = `User age is ${x} years old`
console.log(newStr);


var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message)


