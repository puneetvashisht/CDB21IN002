const MongoClient = require('mongodb').MongoClient;
function connectToDb() {
    return new Promise((resolve, reject)=>{
        const url = 'mongodb://localhost:27017';
        const client = new MongoClient(url, { useUnifiedTopology: true });
        //function to connect to DB
        const dbName = 'ctsdb';
        client.connect(function (err) {
            if (err) reject(err);
            console.log('Connected successfully to server');
            const db = client.db(dbName);
            resolve(db)
            // fn(db);
        });
    })
    
}

module.exports = connectToDb;