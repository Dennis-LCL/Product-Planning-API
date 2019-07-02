const express = require("express");
const forecastAssumptionsRouter = express.Router();

forecastAssumptionsRouter.get("/", (req, res, next) => {
  res.status(200).send({ message: "haha, there nothing here!" });
});

module.exports = forecastAssumptionsRouter;
