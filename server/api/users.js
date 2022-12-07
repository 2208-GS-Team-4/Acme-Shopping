const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { User,Cart,Product,Order,OrderProduct,CartProduct, } = require("../db");

// GET localhost:3000/api/users
router.get("/", async (req, res, next) => {
    const users = await User.findAll();
    res.send(users);
  });

router.get("/cartproducts", async (req, res, next) => {
  const cartProducts = await CartProduct.findAll();
  res.send(cartProducts);
});

router.get("/cartproducts/:id", async (req, res, next) => {
  const cartProduct = await CartProduct.findByPk(req.params.id);
  res.send(cartProduct);
});

// router.put("/cartproduct/:id", async (req, res, next) => {
//   const cartProduct = await CartProduct.findByPk(req.params.id);
//   await cartProduct.update({quantity:10});
//   res.send(cartProduct);
// });

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
router.put("/:userId/cart", async (req, res, next) => {
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
  // getting an error when trying to do this straight away --> having to update 
  // the quantity instead of adding new item to table
  // await CartProduct.create({
  //   quantity,
  //   price,
  //   cartId,
  //   productId
  // });

  // this code (lines 78-94) will work to update the quantity of the product in the user's car
  // this creates a new bug --> what if the user adds the same item, but it now has a different price?
  // we can't just update the price, because the price at the time of the first purchase was different!
  const itemInCart = await CartProduct.findOne({
    where:{
      productId:productId
    }
  });
  if(!itemInCart){
    await CartProduct.create({
      quantity,
      price,
      cartId,
      productId
    });
  }else{
    const newQuantity = itemInCart.quantity += quantity;
    await itemInCart.update({quantity:newQuantity});
  };
  res.sendStatus(200);
});



module.exports = router;