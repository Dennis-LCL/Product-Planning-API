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

promoPlansRouter.get("/:planid", async (req, res, next) => {
  console.log(req.params.planid);
  const foundPromoPlan = await PromoPlanModel.findOne(
    { PlanID: Number(req.params.planid) },
    { _id: 0, __v: 0 }
  );
  res.status(200).send(foundPromoPlan);
});

promoPlansRouter.get("/list/all", async (req, res, next) => {
  const foundPromoPlans = await PromoPlanModel.find();
  const planList = [];

  // Construct the list of available plans with only PlanID and Name.
  foundPromoPlans.map(plan => {
    const planListItem = {
      PlanID: plan.PlanID,
      Name: plan.Name
    };
    planList.push(planListItem);
    return;
  });

  res.status(200).send(planList);
});

promoPlansRouter.post("/", async (req, res, next) => {
  // Construct new PlanID
  const arrayOfID = [];
  const allPromoPlans = await PromoPlanModel.find();
  allPromoPlans.map(plan => {
    arrayOfID.push(plan.PlanID);
  });

  let newPlanID;
  arrayOfID === 0 ? (newPlanID = 1) : (newPlanID = Math.max(...arrayOfID) + 1);

  // Construct new PromoPlan document
  const newPromoPlan = {
    PlanID: newPlanID,
    Name: req.body.Name,
    PlanDetail: req.body.PlanDetail
  };

  // Insert new PromoPlan document into collection
  const createdPromoPlan = await PromoPlanModel.create(newPromoPlan);
  res.status(200).send(createdPromoPlan);
});

promoPlansRouter.put("/:planid", async (req, res, next) => {
  const updatedPromoPlan = await PromoPlanModel.findOneAndUpdate(
    { PlanID: Number(req.params.planid) },
    req.body,
    { new: true }
  );
  res.status(200).send(updatedPromoPlan);
});

module.exports = promoPlansRouter;
