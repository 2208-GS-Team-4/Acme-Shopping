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
router.get("/:type", async (req, res, next) => {
  const type = req.params.type;
  const products = await Product.findAll({
    where: {
      gender: "women",
      type: type,
    },
  });
  res.send(products);
});

// GET localhost:3000/api/women/:type/:id
router.get("/:productType/:name", async (req, res, next) => {
  const name = req.params.name;
  const product = await Product.findAll({ where: { name: name } });
  res.send(product);
});
module.exports = router;
