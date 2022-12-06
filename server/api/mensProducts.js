const express = require("express");
const router = express.Router();
//const { Student, Campus } = require("../db");
const sequelize = require("sequelize")

// GETlocalhost:3000/api/mens
router.get("/", async (req, res, next) => {
  });

// GET localhost:3000/api/mens/product
// GET localhost:3000/api/mens/product/productId
module.exports = router;