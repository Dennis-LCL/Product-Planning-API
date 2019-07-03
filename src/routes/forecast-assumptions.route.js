const express = require("express");
const forecastAssumptionsRouter = express.Router();
const mongoose = require("mongoose");
require("../models/productplan.model");
const ProductPlanModel = mongoose.model("Productplan");
const mockProductPlans = require("../../tests/productplan.mockdata");

forecastAssumptionsRouter.get("/", async (req, res, next) => {
  // await ProductPlanModel.create(mockProductPlans);
  const foundPlans = await ProductPlanModel.find();
  let extractedAssumptions = {};
  const forecastAssumptions = [];
  for (let i = 0; i < foundPlans.length; i++) {
    for (let j = 0; j < foundPlans[i].Plan.length; j++) {
      extractedAssumptions = {
        ID: foundPlans[i].Plan[j].ID,
        Product: foundPlans[i].Product.Description,
        PromoType: foundPlans[i].Plan[j].PromoType,
        KPIs: foundPlans[i].Plan[j].KPIs
      };
      forecastAssumptions.push(extractedAssumptions);
    }
  }
  res.status(200).send(forecastAssumptions);
});

module.exports = forecastAssumptionsRouter;
