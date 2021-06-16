
const advancedFind = (model, populate) => async (req, res, next) =>{

    let query = model.find().select(req.query.select).sort(req.query.sort);

    if(populate){
        query.populate(populate)
    }

    let results = await query;    
    // let results = await .populate({path:'user', select: 'email role'});
   
    res.advancedResults = {
        data: results
    }
    
    next();
}

module.exports = {advancedFind}