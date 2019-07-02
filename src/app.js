require("./utils/db.server");
const express = require("express");
const app = express();
const forecastAssumptionsRouter = require("./routes/forecast-assumptions.route");
const mongoose = require("mongoose");
require("./models/productplan.model");
const ProductPlanModel = mongoose.model("Productplan");

app.use(express.json());
app.use("/forecastassumptions", forecastAssumptionsRouter);

app.get("/greetings", (req, res) => {
  res.status(200).send("Happy Planning!");
});

app.get("/", async (req, res) => {
  const allProductPlans = await ProductPlanModel.find();
  res.status(200).send(allProductPlans);
});

app.use((err, req, res, next) => {
  console.log("Error", err);
  res.sendStatus(500);
});

module.exports = app;
