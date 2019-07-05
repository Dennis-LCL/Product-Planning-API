const express = require("express");
const promoPlansRouter = express.Router();
const mongoose = require("mongoose");
require("../models/promo-plan.model");
const PromoPlanModel = mongoose.model("Promoplan");
// const mockPromoPlans = require("../../tests/promo-plans.mockdata");

promoPlansRouter.get("/", async (req, res, next) => {
  // await PromoPlanModel.create(mockPromoPlans);
  const foundPromoPlans = await PromoPlanModel.find({}, { _id: 0, __v: 0 });
  res.status(200).send(foundPromoPlans);
});

module.exports = promoPlansRouter;
