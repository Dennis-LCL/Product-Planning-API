require("./utils/db.server");
const express = require("express");
const app = express();
const promoParamsRouter = require("./routes/promo-params.route");
const productsRouter = require("./routes/products.route");
const promoGuidelineRouter = require("./routes/promo-guidelines.route");
const mongoose = require("mongoose");
require("./models/productplan.model");
const ProductPlanModel = mongoose.model("Productplan");

app.use(express.json());
app.use("/promoparams", promoParamsRouter);
app.use("/products", productsRouter);
app.use("/promoguidelines", promoGuidelineRouter);

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
