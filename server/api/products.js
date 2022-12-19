const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { Product } = require("../db");
const { authenticateUser } = require('./helpers/authUserMiddleware');

// GET localhost:3000/api/products
router.get("/", async (req, res, next) => {
  const allProducts = await Product.findAll();
  res.send(allProducts);
});

// POST localhost:3000/api/products
router.post("/",authenticateUser, async (req, res, next) => {
  try{
    const { role } = req.user;
    if(role!=='admin'){
        return res.sendStatus(403);
    };
    await Product.create(req.body);
    res.sendStatus(200);
  }catch(error){
    next(error);
  };
});

// DELETE localhost:3000/api/products/:id
router.delete("/:id",authenticateUser,async (req, res, next) => {
  try{
    const { role } = req.user;
    if(role!=='admin'){
        return res.sendStatus(403);
    };
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.sendStatus(204);
  }catch(error){
    next(error);
  };
});

router.put("/:id", async (req, res, next) => {
  const notFoundMessage = 'The object you are trying to update does not exist!';
  try{
    const data = {
      name:req.body.name,
      description:req.body.description,
      color:req.body.color,
      price:req.body.price,
      type:req.body.type,
      gender:req.body.gender,
      imageURL:req.body.imageURL
    };
    const product = await Product.findByPk(req.params.id);
    if(!product) throw new Error(notFoundMessage);
    await product.update(data);
    res.sendStatus(200);
  }catch(error){
      if(error.message===notFoundMessage){
          return res.status(404).send({message:notFoundMessage});
      }
      next(error.message);
  };
});

module.exports = router;