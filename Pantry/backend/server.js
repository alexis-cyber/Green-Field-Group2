const express = require("express");
const connection = require("./connection");
const Router = require("./Routers/router.js");
const Controller = require("./Controllers/controller.js");
const cors = require("cors");
const User = require("./Models/UserModel");
const bcrypt = require("bcrypt");


const app = express();
const port = 8000;


app.use(express.json());
app.use(cors());

app.use("/products", Router);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Server Error");
});

app.post("/register", async(req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
      return res.send({msg: "Both email and password are required."});
    } 
    let userFound = await User.findOne({email});
    if (userFound) {
      return res.send({msg: "This email already exists, login or register with another email."});
    }
    let hashPassword = await bcrypt.hash(password, +process.env.SALT_ROUND);
    await User.create({email:email, password:hashPassword});
    res.send({msg: "Registered successfully."});
  } catch (err) {
    console.log(err);
    res.status(500).send({msg: "Internal server error."});
  } 
});

app.post("/login", async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
      return res.send({msg: "Both email and password are required."});
    } 
    let currentUser = await User.findOne({email});
    if (currentUser) {
      let validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.send({msg: "Invalid password"});
      } else {
        return res.send({msg: "Login successfully."});
      }
    } else {
      return res.status(401).send({msg: "Invalid email."});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({msg: "Internal server error. Login failed."});
  }
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
