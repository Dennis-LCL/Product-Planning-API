const express = require("express");
const productsRouter = express.Router();
const mongoose = require("mongoose");
require("../models/product.model");
const ProductModel = mongoose.model("Product");
// const mockProducts = require("../../tests/products.mockdata");

productsRouter.get("/", async (req, res, next) => {
  // await ProductModel.create(mockProducts);
  const foundProducts = await ProductModel.find({}, { _id: 0, __v: 0 });
  console.log(foundProducts);
  res.status(200).send(foundProducts);
});

module.exports = productsRouter;
