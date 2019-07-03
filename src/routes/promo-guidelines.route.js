const express = require("express");
const promoGuidelinesRouter = express.Router();
const mongoose = require("mongoose");
require("../models/promo-guideline.model");
const PromoGuidelineModel = mongoose.model("Promoguideline");
const mockPromoGuidelines = require("../../tests/promo-guidelines.mockdata");

promoGuidelinesRouter.get("/", async (req, res, next) => {
  await PromoGuidelineModel.create(mockPromoGuidelines);
  const foundPromoGuidelines = await PromoGuidelineModel.find();
  res.status(200).send(foundPromoGuidelines);
});

module.exports = promoGuidelinesRouter;
