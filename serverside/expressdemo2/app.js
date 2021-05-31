// 1. Import express library
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

function getConnection(fn) {
    // Connection URL
    const url = 'mongodb://localhost:27017';

    // Database Name
    const dbName = 'ctsdb';
    const client = new MongoClient(url);
    client.connect(function (err) {
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        fn(db);
        // client.close();
    });

}


var myLogger = function (req, res, next) {
    console.log("Request URL " + req.url)
    next();
}

var printReqBody = function(req,res,next){
    console.log(req.body)
    next();
}

// Middleware
app.use(express.json())

// app.use(printReqBody)



// 2. Create some routes
app.get('/todos', (req,res)=>{
    res.json({success:true})
})

app.post('/todos', printReqBody, (req,res)=>{
    // console.log(req.body);
    getConnection((db)=>{
        const collection = db.collection('todos');
        collection.insertOne(req.body, (err, docs) => {
            if (err) throw err;
            res.status(201).json({ success: true });
        })
    })
    // res.json({success: true});
})

app.use(myLogger);

// 3. Listen on a port
app.listen(3000, ()=>console.log('listening on port 3000'));