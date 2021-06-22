const errorHandler = (err, req,res,next)=>{
    console.log('Error hander.... '.red)
    console.dir(err);
    console.log(`${err.message}`.red.bold)
    // let statusCode = 500;
    let {status, message, auth} = err;

    console.log(typeof(err.code));

    // Duplicate key insertion
    if(err.code === 11000){
        status = 401;
        message= 'Duplicate key, record already exists'
    }
    // Validation errors
    if(err.name === 'ValidationError'){
        status = 401;
        // message= 'Validation Error!! '
    }
    res.status(status || 500).json({auth, message});
}

module.exports = errorHandler;