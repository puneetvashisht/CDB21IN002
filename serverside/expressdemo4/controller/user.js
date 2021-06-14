const User = require('../models/users')


const register = async (req, res, next) => {
    try {
        console.log(req.body)
        let { email, password } = req.body;
        let user = await User.create({ email, password });
        let token = user.getSignedJwtToken(email);
        res.status(201).json({ auth: true, token })
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({success:false, message: err.message});
        next(err);
    }

}


const login = async (req, res, next) => {
    console.log(req.body)

    let { email, password } = req.body

    let user = await User.findOne({ email });
    if (user) {
        // password match
        let result = user.matchPasswords(password);
        if (result) {
            let token = user.getSignedJwtToken(email);
            res.json({ auth: true, token })
        }
        else {
            res.json({ auth: false })
        }
    }

}



const fetchAllUsers = (req, res) => {
    User.find((err, docs) => {
        console.log(docs);
        res.json(docs);
    })
}


module.exports = { register, login, fetchAllUsers }