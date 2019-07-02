const mongoose = require("mongoose");

const mongoOptions = {
  useNewUrlParser: true
};

const dbURI =
  global.__MONGO_URI__ || "mongodb://localhost:27017/productplanning";
mongoose.connect(dbURI, mongoOptions);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error: "));
db.once("open", () => {
  console.log("Connected to MongoDB: ", dbURI);
});
