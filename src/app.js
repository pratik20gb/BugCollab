const express = require("express");
const app = express();
app.get("/test", (req, res) => {
  console.log(req.query);
});
app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
});
app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
