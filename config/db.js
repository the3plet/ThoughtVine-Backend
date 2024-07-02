const moongose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await moongose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected to ${connect.connection.name}`)
  } catch (error) {
    console.log(error)
  }
};

module.exports = connectDb
