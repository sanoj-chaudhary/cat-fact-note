const mongoose = require('mongoose');
const mongoConnection = async() => {
    try {
        const MONGO_URL = process.env.MONGO_URL;
      console.log(MONGO_URL)
      await mongoose.connect(MONGO_URL).then((data) =>{
            console.log(`Database connected with ${data.connection.host}`);
        });
        mongoose.set('debug', true);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = mongoConnection;