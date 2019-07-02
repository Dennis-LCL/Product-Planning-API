const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const ProductPlanSchema = Schema({
  product: {
    brand: { type: String, required: true },
    group: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String, required: true }
  },
  plan: [
    {
      planId: { type: String, required: true, unique: true },
      promoType: { type: String, required: true },
      frequency: { type: Number, required: true },
      kpis: {
        baseListPrice: { type: Number, required: true },
        baselineUnit: { type: Number, required: true },
        fundRate: { type: Number, required: true },
        incrementalGIV: { type: Number, required: true },
        incrementalUnit: { type: Number, required: true },
        netSufficiency: { type: Number, required: true },
        roi: { type: Number, required: true },
        scanDealUnitCost: { type: Number, required: true },
        scanUnit: { type: Number, required: true },
        totalBudget: { type: Number, required: true },
        totalCost: { type: Number, required: true }
      }
    }
  ]
});

mongoose.model("Product-plan", ProductPlanSchema);
