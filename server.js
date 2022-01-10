const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });

const app = express();

const transaction = require("./routes/transactions");

app.use("/api/v1/transactions", transaction);

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
