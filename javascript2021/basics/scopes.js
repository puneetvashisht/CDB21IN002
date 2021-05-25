// for(var i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i)

// var x = 9.3434;
// console.log(typeof(x));

let courses = [
    {title: "Ember"}, 
    {title: "React"}, 
    {title: "Angular"}
]
courses.sort((a, b)=>a.title - b.title)
console.log(courses)

let today = new Date();
// instance methods
console.log(today.getTime());
console.log(new Date(1000 * 60 * 60 * 24));
// static method

var str = `Good afternoon everyone..
Good sunny weather today`;

let resultStr = str.replace('\n', '')

console.log(str);
console.log(resultStr);



var str = "testtest.com";
// var patt = new RegExp("/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/");
var res = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(str);
console.log(res)

// let y;
// if(!y) throw "Y is undefined.."
try{
    // error prone code
    let y;
    // if(!y) throw "Y is undefined.."
    let x = y/0
}
catch(err){
    console.log('Error')
    console.log(err)
}
finally{
    console.log('Always executed...')
}

console.log('Allz is well at the end')


text = "abcd";
var text;
console.log(text);