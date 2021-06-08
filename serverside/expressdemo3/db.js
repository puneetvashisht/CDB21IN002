
const connectToDb = require('./dbconnect')

// callbacks
//function to find records;
// function findEmployees() {
//     connectToDb((db) => {
//         const collection = db.collection('employee');
//         collection.find({}).toArray(function (err, docs) {
//             if (err) throw err;
//             console.log('Found the following records');
//             console.log(docs);
//             // client.close();
//         })
//     })
// };


// promises
// function findEmployees() {
//     connectToDb()
//     .then((db)=> {
//         const collection = db.collection('employee');
//         collection.find({}).toArray(function (err, docs) {
//             if (err) throw err;
//             console.log('Found the following records');
//             console.log(docs);
//             // client.close();
//         })
//     })
//     .catch(err => {throw err})
// };

const findEmployees = async () => {
    // await promise
    const db = await connectToDb();
    const collection = db.collection('employee');
    collection.find({}).toArray(function (err, docs) {
        if (err) throw err;
        console.log('Found the following records');
        console.log(docs);
        // client.close();
    })
}


findEmployees()











// function to insert records;


// Use connect method to connect to the server
// client.connect(function(err) {
//   if(err) throw err;
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);


//   // find/insert
//   const collection = db.collection('employee');
// //   collection.insertOne({name:'FromNodeJS', salary: 34344}, (err, docs)=>{
// //     if(err) throw err;
// //     console.log('Inserted successfully');
// //     client.close();
// //   })

//     collection.find({}).toArray(function(err, docs) {
//     if(err) throw err;
//     console.log('Found the following records');
//     console.log(docs);
//     client.close();
//   });


// });


