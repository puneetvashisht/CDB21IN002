const express = require('express');
const app = express();
const dbConnect = require('./db');
const WorkoutRoutes = require('./routes/workout')
const UserRoutes = require('./routes/user')
require('colors')
require('dotenv').config()


// Connect to DB
dbConnect()


// Request json parser
app.use(express.json())

// All routes ..
// URL = http://localhost:8080/api/v1
// http://localhost:8080/api/v1/workouts/Jogging
// {{URL}}/workouts/Jogging
app.use('/api/v1/workouts', WorkoutRoutes)
app.use('/api/v1/users', UserRoutes)


// Error Handler
app.use((err, req,res,next)=>{
  console.log('Error hander.... '.red)
  console.log(`${err.message}`.red.bold)
  let statusCode = 500;
  if(err.status){
    statusCode = err.status
  }

  res.status(statusCode).json({message: err.message});
})


// listen port
app.listen(process.env.APP_PORT, ()=>console.log(`listeining on port ${process.env.APP_PORT}`.green));