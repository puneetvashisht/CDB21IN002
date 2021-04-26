

function async(){
   return new Promise((resolve, reject)=>{
        setTimeout(function(){
           resolve({message:"success"})
        // reject('failure')
        },5000)
    })
}


console.log('start...')

async()
.then(res=>console.log(res))
.catch(err=>console.log(err));

console.log('end....');
