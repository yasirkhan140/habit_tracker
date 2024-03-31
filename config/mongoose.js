// require("dotenv").config();
// conntecing to mongoose

const mongoose = require("mongoose");

const db = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://yasiralikhan140:uVlKeqlDC0q3geYl@cluster0.qhsxggd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

module.exports = db;
