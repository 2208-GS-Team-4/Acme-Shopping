const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { Product } = require("../db");

// GETlocalhost:3000/api/mens
router.get("/", async (req, res, next) => {
  const menProducts = await Product.findAll({
    where: {
      gender: "men",
    },
  });
  res.send(menProducts);
});

// GET localhost:3000/api/mens/:productType
router.get("/:productType", async (req, res, next) => {
  //sweater
  const productType = req.params.productType;
  const products = await Product.findAll({
    where: {
      gender: "men",
      type: productType,
    },
  });
  res.send(products);
});

// GET localhost:3000/api/mens/:productType/:productId
router.get("/:productType/:productName", async (req, res, next) => {
  //      sweater/1
  const productName = req.params.productName;
  const product = await Product.findByAll({
    where: {
      name: productName,
    },
  });
  res.send(product);
});
module.exports = router;
