const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
const flightRoutes = require("./routes/flight");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/flight", flightRoutes);

// Connect

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000);
