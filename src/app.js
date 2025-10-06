const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "This is the get/ route ",
  });
});
app.post("/user", (req, res) => {
  res.send("data saved inside database");
});
app.delete("/user", (req, res) => {
  res.send("data deleted successfully");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
