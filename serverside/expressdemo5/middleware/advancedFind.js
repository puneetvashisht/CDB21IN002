
const advancedFind = (model, populate) => async (req, res, next) =>{

    // let query = model.find().select(req.query.select).sort(req.query.sort);

    // if(populate){
    //     query.populate(populate)
    // }

    // let results = await query;    
    // // let results = await .populate({path:'user', select: 'email role'});



    // Copy req.query
  const reqQuery = { ...req.query };

    // {title=Jogging&select:role,email}
    // email:test@test.com&select:role,email

    // model.find({email:test@test.com}).select(role,email)

  // Fields to exclude
  const removeFields = ['select', 'sort'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach(param => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

  console.log(queryStr)
  // Finding resource

  query = model.find(JSON.parse(queryStr));

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }
   

  if (populate) {
    query = query.populate(populate);
  }

  // Executing query
  const results = await query;

    res.advancedResults = {
        success: true,
        count: results.length,
        data: results
    }
    
    next();
}

module.exports = {advancedFind}