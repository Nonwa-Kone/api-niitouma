const mongoose = require("mongoose");

const connectDB = async (url) => {
  const conn = await mongoose.connect(url);
  console.log(
    `La base de donnee est connecté à l'adresse : ${conn.connection.host}!`,
  );
};

module.exports = connectDB;
