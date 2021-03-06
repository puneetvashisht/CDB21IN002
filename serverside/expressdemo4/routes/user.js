// User Routes
var express = require('express')
var router = express.Router()
const User = require('../models/users')
const {register, login, fetchAllUsers} = require('../controller/user')
const {protect} = require('../middleware/auth')

const loggerMiddleware = (req, res, next) =>{
    console.log('Request recieved: ', req.url)
    next();
}


// Routing information (URL, methods mapping)
router.route('/')
.post(register)
.get(protect, loggerMiddleware, fetchAllUsers)

router.route('/login')
.post(login)


module.exports = router;

