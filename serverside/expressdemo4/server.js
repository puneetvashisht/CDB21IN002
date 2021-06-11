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
app.use('/api/v1/workouts', WorkoutRoutes)
app.use('/api/v1/users', UserRoutes)


// Error Handler
app.use((err, req,res,next)=>{
  console.log('Error hander.... '.red)
  console.log(`${err.message}`.red.bold)
  res.status(500).json({message: err.message});
})


// listen port
app.listen(process.env.APP_PORT, ()=>console.log(`listeining on port ${process.env.APP_PORT}`.green));