const mongoose = require("mongoose");

const mongoOptions = {
  useNewUrlParser: true
};

let dbURI;

if (process.env.NODE_ENV === "production") {
  dbURI =
    "mongodb://heroku_m2t9d0q5:ed85205acb5m4eu0oj877i4hhd@ds247637.mlab.com:47637/heroku_m2t9d0q5";
} else {
  dbURI = global.__MONGO_URI__ || "mongodb://localhost:27017/productplanning";
}

mongoose.connect(dbURI, mongoOptions);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error: "));
db.once("open", () => {
  console.log("Connected to MongoDB: ", dbURI);
});
