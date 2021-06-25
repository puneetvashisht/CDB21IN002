const express = require('express');
const app = express();
const dbConnect = require('./db');
const WorkoutRoutes = require('./routes/workout')
const UserRoutes = require('./routes/user')
const WeightLogRoutes = require('./routes/weight-log')
const errorHandler = require('./middleware/errorHandler')
const fileupload = require('express-fileupload')
const cors = require('cors')
require('colors')
require('dotenv').config()

// Connect to DB
dbConnect()

// Request json parser
app.use(express.json())
app.use(fileupload());

// enable cors request
app.use(cors());

app.use(express.static('client/build'))

app.use(express.static('public'))

// All routes ..
// URL = http://localhost:8080/api/v1
// http://localhost:8080/api/v1/workouts/Jogging
// {{URL}}/workouts/Jogging
app.use('/api/v1/workouts', WorkoutRoutes)
app.use('/api/v1/weightlogs', WeightLogRoutes)
app.use('/api/v1/users', UserRoutes)


// Error Handler
app.use(errorHandler)


// listen port
app.listen(process.env.APP_PORT, ()=>console.log(`listeining on port ${process.env.APP_PORT}`.green));