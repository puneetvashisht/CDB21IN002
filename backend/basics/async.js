function test(callback){
    setTimeout(()=>{
        console.log('Running async');
        callback("xyz") 
    }, 0)
}

console.log('start')

test(function(res){
    console.log(res)
});

console.log('end..')
