const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const PromoParamSchema = Schema({
  ID: { type: String, required: true, unique: true },
  ProductCode: { type: String, required: true },
  PromoTypeID: { type: String, required: true },
  TimePeriod: { type: String },
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
});

mongoose.model("Promoparam", PromoParamSchema);
