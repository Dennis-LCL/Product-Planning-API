const express = require("express");
const promoGuidelinesRouter = express.Router();
const mongoose = require("mongoose");
require("../models/promo-guideline.model");
const PromoGuidelineModel = mongoose.model("Promoguideline");
// const mockPromoGuidelines = require("../../tests/promo-guidelines.mockdata");

promoGuidelinesRouter.get("/", async (req, res, next) => {
  // await PromoGuidelineModel.create(mockPromoGuidelines);
  const foundPromoGuidelines = await PromoGuidelineModel.find();
  res.status(200).send(foundPromoGuidelines);
});

promoGuidelinesRouter.get("/promotypes", async (req, res, next) => {
  const foundPromoGuidelines = await PromoGuidelineModel.findOne(
    { "Product.Code": "A01" },
    { "Guidelines.PTID": 1, "Guidelines.PromoType": 1 }
  );
  const promoTypes = [];
  foundPromoGuidelines.Guidelines.map(Guideline => {
    return promoTypes.push(Guideline);
  });
  res.status(200).send(promoTypes);
});

module.exports = promoGuidelinesRouter;
