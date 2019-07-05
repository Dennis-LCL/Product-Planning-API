const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const PromoPlanSchema = Schema({
  PlanID: { type: Number, required: true, unique: true },
  Name: { type: String, required: true },
  PlanDetail: [
    {
      ID: { type: String, required: true },
      Frequency: { type: Number, required: true }
    }
  ]
});

mongoose.model("Promoplan", PromoPlanSchema);
