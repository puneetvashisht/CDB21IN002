

function test(){
    return new Promise((resolve, reject)=>{
        reject({status:404, message: 'something went wront'});
        // resolve(1);
    })
}

function test1(){
    return new Promise((resolve, reject)=>{
        reject({status:404, message: 'something went wront'});
        // resolve(1);
    })
}


async function trytest(){
    try{
        let result = await test();
        let result2 = await test1();
        console.log(result);
        console.log(2);
    }
    catch(err){
        console.log(err);
    }
   
}
trytest();


// Promise

// test()
// .then((res)=>{
//     console.log(res);
//     if(res == 1){
//         throw {status:404, message: 'something went wront'}
//     }
//     return 2;
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch(err=>console.log(err))





// console.log('Alls well!!')