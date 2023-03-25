const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();
const router = require("./routers/routers");

const { PORT, DB_HOST } = process.env;

const app = express();

app.use(express.json());
app.use("/books", router);

app.use((req, res) => {
  res.sendStatus(404).send("Not found");
});
app.use((error, req, res, next) => {
  res.sendStatus(500).send("Server error");
});

mongoose.connect(DB_HOST);

app.listen(PORT, () => {
  console.log("Server is running");
});
