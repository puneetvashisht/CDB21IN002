const User = require('../models/users')
const jwt = require('jsonwebtoken')

const protect = async (req, res, next) =>{
    console.log(req.headers);
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1];
        console.log('Extracted token', token)
        console.log('decode token here...')

        // if (!token) {
        //     res.status(401).json({ message: 'No token sent' })
        // }
        if(!token) return next({status: 401, message: 'No token sent'})

        try{
            var decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
            console.log(decoded) // bar
            let user = await User.findById(decoded.id)

            // User is availabe in request object
            req.user = user;
            console.log('Found user', user)
            next();
        }
        catch(err){
            return next({status: 401, message: 'Token Invalid!!'})
        }
        

    }
    else{
        return next({status: 401, message: 'No token sent!!'})
    }
    
    
}



const authorize = (...roles) => async (req, res, next) =>{
    console.log('Actual user role: ', req.user.role)
    console.log('Roles allowed: ', roles);
    if(!roles.includes(req.user.role)){
        return next({ status: 403, message: 'User not authorized to access!!' })
    }
    next();
}

module.exports = {protect, authorize}