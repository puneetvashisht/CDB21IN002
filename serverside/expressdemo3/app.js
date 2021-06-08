// import library
const express = require('express');
const app = express();
const connectToDb = require('./dbconnect')

// Store this permanent in a persistent store ( Mongo DB)
let employees = []


// middleware.. before any routes
app.use(express.json());


// creating routes
app.get('/hello', (req,res)=>{
    console.log(req.url);
    // res.send('Hello world!! from Nodejs');
    res.json({message: 'Hello world!! from NodeJS'})
})

// fetching a resource from server
app.get('/employees', async(req,res)=>{

    // db code to fetch employees 
    const db = await connectToDb();
    const collection = db.collection('employee');
    collection.find({}).toArray(function (err, docs) {
        if (err) throw err;
        console.log('Found the following records');
        console.log(docs);
        res.json(docs); 
        // client.close();
    })
   
})

// sending an object to sever as json
app.post('/employees', (req,res)=>{
    console.log(req.body);
    employees.push(req.body)
    res.json(employees);
})


// listening on to port
app.listen(3000, ()=>{console.log('Running on port 3000')})



// mongod --dbpath <folder_name>