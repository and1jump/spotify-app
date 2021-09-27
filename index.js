const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello!");
});

app.get("/", (req, res) => {
  const data = {
    name: "Dan",
    isAwesome: true
  };

  res.json(data);
});

app.get("/awesome-generator", (req, res) => {
  const { name, isAwesome } = req.query;
  res.send(`${name} is ${JSON.parse(isAwesome) ? "really" : "not"} awesome`);
});

const port = 8888;
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
