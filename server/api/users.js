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
  console.log(newOrder);
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
  const { newOrder, total } = req.body;
  const shippingAddress = newOrder.shippingAddress;
  const billingAddress = newOrder.billingAddress;
  const number = newOrder.creditCard;
  const expiration = newOrder.creditCardExp;
  const cvv = newOrder.creditCardCVV;
  const contactName = newOrder.contactName;
  const contactPhone = newOrder.contactPhone;
  const contactEmail = newOrder.contactEmail;
  const shippingOption = newOrder.shippingOption;
  const status = "placed";
  const orderToUpdate = await order.update({
    shippingAddress,
    billingAddress,
    contactName,
    contactPhone,
    contactEmail,
    total,
    shippingOption,
    status,
  });
  const userToUpdate = await user.update({
    creditCard: { number, expiration, cvv },
  });
  console.log(user);
  res.send(orderToUpdate);
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

// POST localhost:3000/api/users/:userId/order
router.post("/:userId/order", async (req, res, next) => {
  let { newOrder } = req.body;

  const userId = req.params.userId;
  const status = "unpaid";
  // create an order that associated with that user
  const order = await Order.create({ userId, status });
  for (let i = 0; i < newOrder.length; i++) {
    delete newOrder[i].cartId;
    newOrder[i].orderId = order.id;
  }

  await Promise.all(
    newOrder.map((singleProduct) => OrderProduct.create(singleProduct))
  );

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
