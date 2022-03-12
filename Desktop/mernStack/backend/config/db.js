const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB is connected to ${conn.connection.host}`.underline.cyan
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
