const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const ProductPlanSchema = Schema({
  ID: { type: String, required: true, unique: true },
  Product: {
    Brand: { type: String, required: true },
    Group: { type: String, required: true },
    Code: { type: String, required: true },
    Description: { type: String, required: true }
  },
  TimePeriod: {
    Granularity: { type: String },
    Period: { type: String }
  },
  Plan: [
    {
      ID: { type: String, required: true, unique: true },
      PromoType: { type: String, required: true },
      Frequency: { type: Number, required: true },
      Params: {
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
