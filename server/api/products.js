const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { Product } = require("../db");

// GETlocalhost:3000/api/products
router.get("/", async (req, res, next) => {
  const allProducts = await Product.findAll();
  res.send(allProducts);
});

// GETlocalhost:3000/api/products
router.post("/", async (req, res, next) => {
    const data = {
        name,
        description,
        color,
        price,
        type,
        gender
    } = req.body;
    await Product.create(data)
    res.sendStatus(200);
  });

module.exports = router;