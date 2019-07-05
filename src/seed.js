const mongoose = require("mongoose");
require("./models/product.model");
require("./models/promo-guideline.model");
require("./models/promo-param.model");
require("./models/product-plan.model");

const ProductModel = mongoose.model("Product");
const PromoGuidelineModel = mongoose.model("Promoguideline");
const PromoParamModel = mongoose.model("Promoparam");
const ProductPlanModel = mongoose.model("Productplan");

const defaultProducts = require("../tests/products.mockdata");
const defaultPromoGuidelines = require("../tests/promo-guidelines.mockdata");
const defaultPromoParams = require("../tests/promo-params.mockdata");
const defaultProductPlans = require("../tests/product-plans.mockdata");

const populateDefaultValuesInDB = async () => {
  await ProductModel.collection.drop();
  await PromoGuidelineModel.collection.drop();
  await PromoParamModel.collection.drop();
  await ProductPlanModel.collection.drop();
  await ProductModel.create(defaultProducts);
  await PromoGuidelineModel.create(defaultPromoGuidelines);
  await PromoParamModel.create(defaultPromoParams);
  await ProductPlanModel.create(defaultProductPlans);
};

module.export = populateDefaultValuesInDB;
