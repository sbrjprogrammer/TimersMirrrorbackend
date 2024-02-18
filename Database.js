const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('pleasePutYourClusterUrl', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
       
        });

        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDB;
