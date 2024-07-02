require("dotenv").config();

const connectDb = require("./config/db");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

connectDb();

app.use("/", require("./route/main"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
