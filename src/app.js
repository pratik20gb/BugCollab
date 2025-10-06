const express = require("express");
const app = express();
// app.get("/ab\\+c", (req, res) => {
//   res.send("the or chaining");
// });

app.get(/^\/ab+c$/, (req, res) => {
  res.send("regex route working");
});


app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
