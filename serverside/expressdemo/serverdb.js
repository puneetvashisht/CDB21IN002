const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

// responsible for creating a connection to db;
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


// client.connect(function(err) {
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);

//   const collection = db.collection('todos');
//   collection.insertOne({text:'Have tea in rainy season', done: true})

//   client.close();
// });



const app = express();

app.use(express.json());


app.get('/courses', (req, res) => {

    getConnection((db) => {
        // Get the documents collection
        const collection = db.collection('courses');
        // Find some documents
        collection.find({}).toArray(function (err, docs) {
            if (err) throw err;
            console.log('Found the following records');
            console.log(docs);
            res.json({ success: true, data: docs });
        });
    })
})

app.post('/courses', (req, res) => {
    let course = req.body;
    console.log(course)

    getConnection((db) => {
        const collection = db.collection('courses');
        collection.insertOne(course, (err, docs) => {
            if (err) throw err;
            console.log(docs);
            res.status(201).json({ success: true });
        })
    })

})

app.delete('/courses/:id', (req, res) => {

    getConnection((db) => {
        const collection = db.collection('courses');
        collection.deleteOne({_id: ObjectId(req.params.id)}, ((err, docs) => {
            if (err) throw err;
            console.log(docs);
            res.json({ success: true });
        }))
    })
})

app.put('/courses/:id', (req, res) => {
    getConnection((db) => {
        const collection = db.collection('courses');
        collection.updateOne({_id: ObjectId(req.params.id)}, { $set: req.body },
        { upsert: true }, ((err, docs) => {
            if (err) throw err;
            console.log(docs);
            res.json({ success: true });
        }))
    })
   
})

app.listen(3000, () => console.log('listening on port 3000'))
