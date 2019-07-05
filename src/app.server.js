const app = require("./app");
const port = process.env.PORT || 3001;
const populateDefaultValuesInDB = require("./seed");

app.listen(port, async () => {
  if (process.env.NODE_ENV === "production") {
    await populateDefaultValuesInDB();
    console.log(`API App Server running on production with port: ${port}.`);
  } else {
    console.log(`API App Server running on localhost with port: ${port}.`);
  }
});
