const User = require('../models/users')
const asyncHandler = require('../middleware/async')


const register = asyncHandler(async (req, res, next) => {
    // try {
    let user = await User.create(req.body);
    let token = user.getSignedJwtToken(user._id);
    res.status(201).json({ auth: true, token })
    // }
    // catch (err) {
    //     console.log(err);
    //     // res.status(500).json({success:false, message: err.message});
    //     next(err);
    // }

})


const login = asyncHandler(async (req, res, next) => {
    console.log(req.body)

    let { email, password } = req.body

    if (!email) return next({ status: 401, message: 'Email is not provided' })

    let user = await User.findOne({ email });
    if (!user) return next({ status: 401, message: 'Email provided is wrong!!' })
    // password match
    let result = await user.matchPasswords(password);
    if (!result) return next({ status: 401, message: 'Password provided is wrong!!' })

    let token = user.getSignedJwtToken(user._id);
    res.json({ auth: true, token })



})



const fetchAllUsers = asyncHandler(async (req, res) => {
    res.json(res.advancedResults);

    // console.log(req.query)

    // let users = await User.find().select(req.query.select).sort(req.query.sort);
    // res.json({ success: true, data: users });
})


module.exports = { register, login, fetchAllUsers }