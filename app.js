const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Welcome to our smashing stateless Node.JS app!");
});
app.listen(port, () => {
  console.log(`Smashing app listening at http://localhost:${port}`);
});
