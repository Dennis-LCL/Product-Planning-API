require("./utils/db.server");
const express = require("express");
const cors = require("cors");
const app = express();
const promoParamsRouter = require("./routes/promo-params.route");
const productsRouter = require("./routes/products.route");
const promoGuidelineRouter = require("./routes/promo-guidelines.route");
const mongoose = require("mongoose");
require("./models/product-plan.model");
const ProductPlanModel = mongoose.model("Productplan");
// const mockProductPlans = require("../tests/product-plans.mockdata");

app.use(cors());
app.use(express.json());
app.use("/promoparams", promoParamsRouter);
app.use("/products", productsRouter);
app.use("/promoguidelines", promoGuidelineRouter);

app.get("/greetings", (req, res) => {
  res.status(200).send("Happy Planning!");
});

app.get("/", async (req, res) => {
  // await ProductPlanModel.create(mockProductPlans);
  const allProductPlans = await ProductPlanModel.find();
  res.status(200).send(allProductPlans);
});

app.use((err, req, res, next) => {
  console.log("Error", err);
  res.sendStatus(500);
  next();
});

module.exports = app;
