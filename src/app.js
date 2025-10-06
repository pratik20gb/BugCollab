const express = require("express");
const app = express();

app.use("/dashboard", (req, res) => {
  res.send("Hello from the Dashboard!");
});

app.use("/test", (req, res) => {
  res.send("Testing the server");
});
app.use("/hello", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
