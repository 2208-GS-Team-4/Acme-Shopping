const express = require("express");
const { Test } = require("mocha");
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
    include: [Cart][Order],
  });
  const { newOrder } = req.body;

  res.send(user);
});
router.put("/:userId", async (req, res, next) => {
  const user = await User.findByPk(req.params.userId, {
    include: [Cart][Order],
  });
  const order = await Order.findOne({
    where: {
      userId: req.params.userId,
    },
  });
  const { newOrderInfo } = req.body;
  const number = newOrderInfo.number;
  const expiration = newOrderInfo.expiration;
  const cvv = newOrderInfo.cvv;
  const userToUpdate = await user.update({
    creditCard: { number, expiration, cvv },
  });

  res.send(201);
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
    let total = 0;
    let itemTotal = [];
    for (let i = 0; i < allProducts.length; i++) {
      itemTotal.push(allProducts[i].price * allProducts[i].quantity);
    }
    for (let j = 0; j < itemTotal.length; j++) {
      total += itemTotal[j];
    }
    total = total.toFixed(2);
    cart.update({ total });

    res.json({ allProducts, cart });
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
router.delete("/:userId/cart/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const itemToDelete = await CartProduct.findByPk(id);
    await itemToDelete.destroy();
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
router.put("/:userId/cart", async (req, res, next) => {
  try {
    const { quantity, id } = req.body;
    const cart = await Cart.findOne({
      where: {
        userId: req.params.userId,
      },
    });
    const itemToChange = await CartProduct.findOne({
      where: {
        cartId: cart.id,
        id: id,
      },
    });

    itemToChange.update({ quantity });

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
router.delete("/:userId/cart", async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: {
        userId: req.params.userId,
      },
    });
    const itemToDelete = await CartProduct.findAll({
      where: {
        cartId: cart.id,
      },
    });

    await Promise.all(itemToDelete.map((item) => item.destroy()));
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// POST localhost:3000/api/users/:userId/order
router.post("/:userId/order", async (req, res, next) => {
  try {
    let { cart, newOrderInfo, total } = req.body;
    console.log(cart);
    const shippingAddress = newOrderInfo.shippingAddress;
    const billingAddress = newOrderInfo.billingAddress;
    const contactName = newOrderInfo.contactName;
    const contactPhone = newOrderInfo.contactPhone;
    const contactEmail = newOrderInfo.contactEmail;
    const shippingOption = newOrderInfo.shippingOption;
    const userId = req.params.userId;
    const status = "placed";
    // create an order that associated with that user
    const order = await Order.create({ userId, status });
    for (let i = 0; i < cart.length; i++) {
      delete cart[i].cartId;
      delete cart[i].id;
      cart[i].orderId = order.id;
    }
    await Promise.all(
      cart.map((singleProduct) => OrderProduct.create(singleProduct))
    );
    const orderToUpdate = await order.update({
      shippingAddress,
      billingAddress,
      contactName,
      contactPhone,
      contactEmail,
      total,
      shippingOption,
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
router.get("/:userId/order", async (req, res, next) => {
  try {
    const findOrders = await Order.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.send(findOrders);
  } catch (err) {
    console.log(err);
    next(err);
  }
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
