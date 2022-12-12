const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { Product } = require("../db");

// GET localhost:3000/api/women
router.get("/", async (req, res, next) => {
  const womenProducts = await Product.findAll({
    where: {
      gender: "women",
    },
  });
  res.send(womenProducts);
});

// GET localhost:3000/api/women/:type
router.get("/productType/:productType", async (req, res, next) => {
  const productType = req.params.productType;
  const products = await Product.findAll({
    where: {
      gender: "women",
      type: productType,
    },
  });
  res.send(products);
});

// GET localhost:3000/api/women/:type/:id
router.get("/id/:id", async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findAll({ where: { id: id } });
  res.send(product);
});
module.exports = router;
