// import library
const express = require('express');
const app = express();
// 1. Get mongoose library
const mongoose = require('mongoose');
const Employee = require('./models/Employee')


// 2. Connect to db using mongoose
mongoose.connect('mongodb://localhost/ctsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


app.use(express.json());


// creating routes
app.get('/hello', (req, res) => {
    console.log(req.url);
    // res.send('Hello world!! from Nodejs');
    res.json({ message: 'Hello world!! from NodeJS' })
})

// fetching a resource from server
app.get('/employees', async (req, res) => {

    Employee.find((err, docs)=>{
        console.log(docs);
        res.json(docs);
    })

    // db code to fetch employees 
    // const db = await connectToDb();
    // const collection = db.collection('employee');
    // collection.find({}).toArray(function (err, docs) {
    //     if (err) throw err;
    //     console.log('Found the following records');
    //     console.log(docs);
    //     res.json(docs);
    //     // client.close();
    // })

})

// sending an object to sever as json
app.post('/employees', async (req, res) => {
    console.log(req.body);
    let { name, salary } = req.body;
    // employees.push(req.body)

    const m = new Employee();
     m.name = name;
     m.salary = salary
    m.save(function (err) {
        if (err) throw err;
        res.json({sucess: true})
    }); // works
    
    

    


    // if (name && name.length > 4) {
    //     // insert method
    //     const db = await connectToDb();
    //     const collection = db.collection('employee');
    //     collection.insertOne({ name, salary }, (err, docs) => {
    //         res.status(201).json({ success: true })
    //     })
    // }
    // else {
    //     res.status(401).json({ success: false, message: 'Name is required~!!' })
    // }



    // res.json(employees);
})


// listening on to port
app.listen(3000, () => { console.log('Running on port 3000') })



// mongod --dbpath <folder_name>

