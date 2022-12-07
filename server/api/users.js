const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { User,Cart,Product,Order,OrderProduct,CartProduct, } = require("../db");

// GET localhost:3000/api/users
router.get("/", async (req, res, next) => {
    const users = await User.findAll();
    res.send(users);
  });

// GET localhost:3000/api/users/:userId
router.get("/:userId", async (req, res, next) => {
  const user = await User.findByPk(req.params.userId);
  res.send(user);
});

// GET localhost:3000/api/users/:userId/cart
router.get("/:userId/cart", async (req, res, next) => {
  const cart = await Cart.findOne({
    where:{
      userId:req.params.userId
    }
  });
  const cartId = cart.id
  const cartProducts = await CartProduct.findAll({
    where:{
      cartId:cartId
    }
  });
  res.send(cartProducts);
});

// POST localhost:3000/api/users/:userId/cart

// This route works but cannot add multiple of same item to cart!
router.post("/:userId/cart", async (req, res, next) => {
  const cart = await Cart.findOne({
    where:{
      userId:req.params.userId
    }
  });
  const cartId = cart.id;
  const {
    quantity,
    price,
    productId
  } = req.body;
  await CartProduct.create({
    quantity,
    price,
    cartId,
    productId
  });
  res.sendStatus(200);
});

module.exports = router;