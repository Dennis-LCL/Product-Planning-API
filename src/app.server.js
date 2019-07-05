const app = require("./app");
const port = process.env.PORT || 3001;
app.listen(port, () => {
  if (process.env.NODE_ENV === "production") {
    console.log(`API App Server running on production with port: ${port}.`);
  } else {
    console.log(`API App Server running on localhost with port: ${port}.`);
  }
});
