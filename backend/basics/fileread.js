
// import fs library
const fs = require('fs')

console.log('start')

//synchronous variant for read file method
let contents = fs.readFileSync('./basics/files/sample.txt')
console.log('Contents: '+ contents)

//Asynchronous variant for read file method.. use this in most cases

// fs.readFile('./basics/files/sample.txt', (err, data)=>{
//     if(err) throw err;
//     console.log('Contents of file: ' + data)
// })

console.log('end')



