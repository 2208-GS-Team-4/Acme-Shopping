const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { Product } = require("../db");

// GETlocalhost:3000/api/men
router.get("/", async (req, res, next) => {
  const menProducts = await Product.findAll({
    where: {
      gender: "men",
    },
  });
  res.send(menProducts);
});

// GET localhost:3000/api/men/:productType
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

// GET localhost:3000/api/men/:productType/:productId
router.get("/:productType/:id", async (req, res, next) => {
  //      sweater/1
  const id = req.params.id;
  const product = await Product.findAll({
    where: {
      id: id,
    },
  });
  res.send(product);
});

module.exports = router;
