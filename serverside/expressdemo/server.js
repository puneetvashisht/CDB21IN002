const express = require('express')
const app = express();

app.use(express.json());

app.get('/hello', (req,res)=>{
    // res.json({success:true});
    res.send('hello from NodeJS')
})
var courses = [
    {title: 'Angular', summary: 'UI framework from Google!!'},
    {title: 'ReactJS', summary: 'UI library from facebook!!'},
]

app.get('/courses', (req,res)=>{
    console.log('test');
    res.json(courses);
})

app.post('/courses', (req,res)=>{
    let course = req.body;
    console.log(course)
    courses.push(course);
    res.status(201).json(courses);
})

app.delete('/courses/:index', (req, res)=>{
    courses.splice(req.params.index, 1)
    res.json(courses);
})

app.put('/courses/:index', (req, res)=>{
    courses[req.params.index] = req.body;
    res.json(courses);
})

app.listen(3000, ()=>console.log('listening on port 3000'))
