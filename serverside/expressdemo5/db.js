const mongoose = require('mongoose');
// 2. Connect to db using mongoose
const dbConnect = async () => {
   let connection = await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log(`Connected to DB.. `.green.bold)
      
}
module.exports = dbConnect
