const express = require("express");
const promoParamsRouter = express.Router();
const mongoose = require("mongoose");
require("../models/promo-param.model");
const PromoParamModel = mongoose.model("Promoparam");
// const mockPromoParams = require("../../tests/promo-params.mockdata");

promoParamsRouter.get("/", async (req, res, next) => {
  // await PromoParamModel.create(mockPromoParams);
  const foundPromoParams = await PromoParamModel.find(
    {},
    { _id: 0, ID: 1, KPIs: 1 }
  );
  res.status(200).send(foundPromoParams);
});

module.exports = promoParamsRouter;
