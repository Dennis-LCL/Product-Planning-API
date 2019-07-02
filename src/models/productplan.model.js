const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const ProductPlanSchema = Schema({
  Product: {
    Brand: { type: String, required: true },
    Group: { type: String, required: true },
    Code: { type: String, required: true, unique: true },
    Description: { type: String, required: true }
  },
  Plan: [
    {
      ID: { type: String, required: true, unique: true },
      PromoType: { type: String, required: true },
      Frequency: { type: Number, required: true },
      KPIs: {
        BaseListPrice: { type: Number, required: true },
        BaselineUnit: { type: Number, required: true },
        FundRate: { type: Number, required: true },
        IncrementalGIV: { type: Number, required: true },
        IncrementalUnit: { type: Number, required: true },
        NetSufficiency: { type: Number, required: true },
        ROI: { type: Number, required: true },
        ScanDealUnitCost: { type: Number, required: true },
        ScanUnit: { type: Number, required: true },
        TotalBudget: { type: Number, required: true },
        TotalCost: { type: Number, required: true }
      }
    }
  ]
});

mongoose.model("Productplan", ProductPlanSchema);
