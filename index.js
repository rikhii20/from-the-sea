const express = require("express");
const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello Dunia",
  });
});

app.listen(port, () => {
  console.log("app is listening at port", port);
});
