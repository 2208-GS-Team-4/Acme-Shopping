const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { User } = require("../db");
const { authenticateUser } = require("./helpers/authUserMiddleware");

router.get("/", authenticateUser, (req, res, next) => {
  try {
    if (req.user.isAdmin === true) res.sendStatus(200);
    // const userInfo = req.user;
    // console.log(userInfo.username);
    //res.send(userInfo)
    res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

router.post("/", authenticateUser, (req, res, next) => {
  try {
    if (req.user.isAdmin === true) res.sendStatus(200);
    // const userInfo = req.user;
    // console.log(userInfo.username);
    //res.send(userInfo)
    res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
