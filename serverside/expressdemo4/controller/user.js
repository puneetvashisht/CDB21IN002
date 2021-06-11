const User = require('../models/users')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const register = (req,res) =>{
    console.log(req.body)
    let { email, password } = req.body;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) throw err;
        console.log(hash);

        User.create({ email, password: hash }, function (err, small) {
            if (err) throw err;
            // saved!
            console.log('record saved ...')
            res.json({ success: true })
        });

    });
}


const login = (req,res)=> {
    console.log(req.body)

    let { email, password } = req.body;
    // if(!email) res.status(400).json({auth: false})

    User.findOne({ email }, (err, user) => {
        // console.log(user.green.bold)

        bcrypt.compare(password, user.password).then(function (result) {
            console.log(result)
            res.json({auth:result})
        });
    })

}

const fetchAllUsers = (req,res) => {
    User.find((err, docs) => {
        console.log(docs);
        res.json(docs);
    })
}


module.exports = {register, login, fetchAllUsers}