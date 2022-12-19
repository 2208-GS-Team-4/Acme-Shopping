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

//update stock number for women's products
// router.put("/", async (req, res, next) => {
//   const { cart } = req.body;
//   const productToChange = [];
//   let product = [];
//   for (let i = 0; i < cart.length; i++) {
//     productToChange.push({
//       productId: cart[i].productId,
//       quantity: cart[i].quantity,
//       size: cart[i].size,
//     });
//   }
//   for (let j = 0; j < productToChange.length; j++) {
//     product = await Product.findAll({
//       where: {
//         id: productToChange[j].productId,
//       },
//     });
//   }
//   console.log(product[0].option);
//   product[0].update();
//   console.log(product[0]);
//   res.send(200);
// });
module.exports = router;
