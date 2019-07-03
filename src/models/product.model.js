const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const ProductSchema = Schema({
  Code: { type: String, required: true, unique: true },
  Brand: { type: String, required: true },
  Group: { type: String, required: true },
  Description: { type: String, required: true }
});

mongoose.model("Product", ProductSchema);
