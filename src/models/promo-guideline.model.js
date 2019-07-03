const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const PromoGuidelineSchema = Schema({
  Product: {
    Code: { type: String, required: true, unique: true },
    Description: { type: String, required: true },
    Brand: { type: String, required: true },
    Group: { type: String, required: true }
  },
  Guidelines: [
    {
      PTID: { type: String, required: true },
      PromoType: { type: String, required: true },
      MaxFrequency: { type: Number }
    }
  ]
});

mongoose.model("Promoguideline", PromoGuidelineSchema);
