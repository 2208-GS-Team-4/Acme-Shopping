const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { Product } = require("../db");

// GETlocalhost:3000/api/products
router.get("/", async (req, res, next) => {
  const allProducts = await Product.findAll();
  res.send(allProducts);
});

module.exports = router;