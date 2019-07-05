const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const PromoPlanSchema = Schema({
  Name: { type: String, required: true, unique: true },
  PlanDetail: [
    {
      ID: { type: String, required: true },
      Frequency: { type: Number, required: true }
    }
  ]
});

mongoose.model("Promoplan", PromoPlanSchema);
