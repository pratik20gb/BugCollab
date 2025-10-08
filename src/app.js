const express = require("express");
const app = express();

app.use(
  "/",
  (req, res, next) => {
    console.log("handlign the route user !!");
    res.send("response~~");
    next();
  },
  (req, res) => {
    console.log("Handling the route user 2~~");
    res.send("2nd Response!!");
  }
);
// app.use("/route",[rH,rH],rH,rH) we can use arrays to add routes or use combos

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
