

// function sync(){
//     return "success"
// }

var foo = function(){
    console.log('foo')
}

foo();
console.log(foo)

function async(xyz){
    setTimeout(function(){
        console.log(xyz)
        xyz("success")
    },5000)
}


console.log('start...')

// var response = sync();
// console.log(response)

var response = function(res){
    console.log(res);
}
async(response)

console.log('end....');
