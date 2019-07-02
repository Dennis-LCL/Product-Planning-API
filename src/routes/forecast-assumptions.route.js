const express = require("express");
const forecastAssumptionsRouter = express.Router();
const mongoose = require("mongoose");
require("../models/productplan.model");
const ProductPlanModel = mongoose.model("Productplan");
const mockProductPlans = require("../../tests/productplan.mockdata");

forecastAssumptionsRouter.get("/", async (req, res, next) => {
  await ProductPlanModel.create(mockProductPlans);
  const foundPlans = await ProductPlanModel.find();
  res.status(200).send(foundPlans);
});

module.exports = forecastAssumptionsRouter;
