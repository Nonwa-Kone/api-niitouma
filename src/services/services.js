const mongoose = require('mongoose');

const connectDB = async(url) => {
  await mongoose.connect(url);
  return "Done!"
};

module.exports = connectDB;
