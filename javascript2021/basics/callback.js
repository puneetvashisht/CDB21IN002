function test(fn){
    setTimeout(()=> {
       fn("success");
    },0)
}

function test2(fn){
    setTimeout(()=> {
       fn("success");
    },0)
}

function test(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve("success");
         },0)
    })
   
}

console.log('start...')


// callback hell
//  test(function (err, result){
//     console.log(result)
//     test2(function (err, result){
//         console.log(result)
//         test3(function (err, result){
//             console.log(result)
//             test4(function (err, result){
//                 console.log(result)
//                 test5(function (err, result){
//                     console.log(result)
//                  });
//              });
//          });
//      });
//  });



test()
.then(res=>{
    console.log(res);
    return 1
})
.then(data=> {
    test2();
})
.catch(err => console.log('Error ', err))


async function display(){
    try{
        let result = await test();
        console.log(result)
    }
    catch(err){
        console.log('Catch block. .. err : ', err)
    }
   
}

display();



 console.log('end...')
 console.log(window)

