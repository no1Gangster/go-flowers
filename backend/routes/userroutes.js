const express = require("express");
const userRoute = express.Router();
const { UserModel } = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRoute.get("/", (req, res) => {
  res.send("get users list");
});

userRoute.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  try {
    const findUser = await UserModel.find({ email });
    if (findUser) {
      bcrypt.hash(pass, 3, async (err, hashed_pass) => {
        if (err) {
          res.send({ msg: "cannot hash password" });
        } else {
          let user = new UserModel({ name, email, pass: hashed_pass });
          await user.save();
          res.send({ msg: "registration successful" });
        }
      });
    } else {
      res.send({ msg: "cannot find email" });
    }
  } catch (err) {
    res.send(err);
  }
});
userRoute.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const findUser = await UserModel.findOne({ email });
    if (findUser) {
      bcrypt.compare(pass, findUser.pass, (err, hashed) => {
        if (hashed) {
          const token = jwt.sign({ userID: findUser._id }, "ansu");
          res.send({ msg: "successfully signed in", token: token });
        } else {
          res.send({ msg: "wrong credentials entered" });
        }
      });
    } else {
      res.send({ msg: "no user found" });
    }
  } catch (error) {
    res.send(error);
  }
});
module.exports = { userRoute };
