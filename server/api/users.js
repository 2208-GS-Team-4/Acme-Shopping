const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { User,Cart,Product,Order,OrderProduct,CartProduct, } = require("../db");

// GET localhost:3000/api/users
router.get("/", async (req, res, next) => {
    const users = await User.findAll();
    res.send(users);
  });

// POST localhost:3000/api/users/
router.post("/", async (req, res, next) => {
  const data = {
    firstName,
    lastName,
    email,
    username,
    password,
    //shippingAddress,
    //billingAddress,
    //creditCard,
    //phone
  } = req.body;
  const newUser = await User.create(data);
  res.send(newUser);
});

// GET localhost:3000/api/users/:userId
router.get("/:userId", async (req, res, next) => {
  const user = await User.findByPk(req.params.userId,{
    include:[Cart]
  });
  res.send(user);
});

// GET localhost:3000/api/users/:userId/cart
router.get("/:userId/cart", async (req, res, next) => {
  const cart = await Cart.findOne({
    where:{
      userId:req.params.userId
    },
    include:[Product]
  });
  // const cartId = cart.id
  // const cartProducts = await CartProduct.findAll({
  //   where:{
  //     cartId:cartId
  //   }
  // });
  //res.send(cartProducts);
  res.send(cart);
});

// POST localhost:3000/api/users/:userId/cart
router.post("/:userId/cart", async (req, res, next) => {
  let {
    quantity,
    price,
    productId
  } = req.body;
  // find the cart associated with that user
  const cart = await Cart.findOne({
    where:{
      userId:req.params.userId
    }
  });
  const cartId = cart.id;
  await CartProduct.create({
    quantity,
    price,
    cartId,
    productId
  });
  res.sendStatus(200);
});

module.exports = router;

/*
Cart model magic methods

console.log(Object.keys(cart.__proto__));

[
  '_customGetters',    '_customSetters',
  'validators',        '_hasCustomGetters',
  '_hasCustomSetters', 'rawAttributes',
  '_isAttribute',      'getUser',
  'setUser',           'createUser',
  'getProducts',       'countProducts',
  'hasProduct',        'hasProducts',
  'setProducts',       'addProduct',
  'addProducts',       'removeProduct',
  'removeProducts',    'createProduct'
]

*/