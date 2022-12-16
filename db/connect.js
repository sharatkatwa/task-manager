const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// This will remove the deprecated warning form the console
const connectDB = (url) => {
  return mongoose.set('strictQuery', false).connect(url, {});
};

module.exports = connectDB;
