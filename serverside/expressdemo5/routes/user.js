// User Routes
var express = require('express')
var router = express.Router()
const User = require('../models/users')
const {register, login, fetchAllUsers, uploadProfilePic} = require('../controller/user')
const {protect} = require('../middleware/auth')
const {advancedFind} = require('../middleware/advancedFind')

const loggerMiddleware = (req, res, next) =>{
    console.log('Request recieved: ', req.url)
    next();
}


// Routing information (URL, methods mapping)
router.route('/')
.post(register)
.get(advancedFind(User), fetchAllUsers)

router.route('/login')
.post(login)

router.route('/:id/photo')
.put(uploadProfilePic)


module.exports = router;

