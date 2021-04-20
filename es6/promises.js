

// function sync(){
//     return "success"
// }

function async(callback){
    setTimeout(function(){
        console.log(callback)
        callback("success")
    },5000)
}


console.log('start...')

// var response = sync();
// console.log(response)
async(function(res){
    console.log(res);
})

console.log('end....');
