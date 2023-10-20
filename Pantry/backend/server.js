const express = require("express");
const connection = require("./connection");
const Router = require("./Routers/router.js");
const Controller = require("./Controllers/controller.js");
const cors = require("cors");


const app = express();
const port = 8000;


app.use(express.json());
app.use(cors());

app.use("/products", Router);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Server Error");
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
