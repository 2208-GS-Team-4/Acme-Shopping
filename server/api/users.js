const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const {
  User,
  Cart,
  Product,
  Order,
  OrderProduct,
  CartProduct,
} = require("../db");

// GET localhost:3000/api/users
router.get("/", async (req, res, next) => {
  const users = await User.findAll();
  res.send(users);
});

// POST localhost:3000/api/users/
router.post("/", async (req, res, next) => {
  const data = ({
    firstName,
    lastName,
    email,
    username,
    password,
    //shippingAddress,
    //billingAddress,
    //creditCard,
    //phone
  } = req.body);
  const newUser = await User.create(data);
  await Cart.create({ userId: newUser.id });
  res.send(newUser);
});

// GET localhost:3000/api/users/:userId
router.get("/:userId", async (req, res, next) => {
  const user = await User.findByPk(req.params.userId, {
    include: [Cart],
  });
  res.send(user);
});

// GET localhost:3000/api/users/:userId/cart
router.get("/:userId/cart", async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: {
        userId: req.params.userId,
      },
    });
    const allProducts = await CartProduct.findAll({
      where: {
        cartId: cart.id,
      },
    });
    res.send(allProducts);
  } catch (error) {
    next(error);
  }
});

// POST localhost:3000/api/users/:userId/cart
router.post("/:userId/cart", async (req, res, next) => {
  let { name, size, imageURL, quantity, price, productId } = req.body;
  // find the cart associated with that user
  const cart = await Cart.findOne({
    where: {
      userId: req.params.userId,
    },
  });
  const cartId = cart.id;
  await CartProduct.create({
    name,
    size,
    imageURL,
    quantity,
    price,
    productId,
    cartId,
  });
  res.sendStatus(200);
});
router.put("/:userId/cart", async (req, res, next) => {
  let { quantity } = req.body;
  // find the cart associated with that user
  const cart = await Cart.findOne({
    where: {
      userId: req.params.userId,
    },
  });
  const findItem = await CartProduct.findOne({
    where: {
      cartId: cart.id,
    },
  });
  findItem.update({ quantity });
  console.log(quantity);
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
