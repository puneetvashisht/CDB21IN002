
let arr  = ['a', 'b', 'c', 'abc'];

console.log(arr[1]);


// // index based
// for(let i=0; i<=arr.length; i++){
//     console.log(arr[i]);
// }
// // enhanced for loop
// for(let obj of arr){
//     console.log(obj)
// }
// safe... 
arr.filter(val => val.startsWith('a')).forEach((element, i)=>console.log(element, i));

var a = 34;
var amitScore = 56;

var scores = [14, 56, 45, 44];

var courses = [
    {title:'Angular', summary: 'Summary'}
]