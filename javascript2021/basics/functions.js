// mul(3,4);

// function mul(x,y){
//     console.log(x*y)
// }

// class Person{
//     String name;

//     getName(){
//         return name;
//     }
// }

// 1. Lexical Scope 
// outer:  [x:undef, inner: udef ]
// inner: []

// 2. Execution
// outer:  [x:2, inner: fn ]
// inner: [x: undef]

function outer(){
    var x = 2;
    console.log('outer...')
    
    var inner = function(){
        console.log('inner...')
        console.log('Value of x ', x + 2)
        var x = 6;
        console.log('Value of x ', x)
    }
    return inner;
}

// var result = outer();
// result();

outer()();





