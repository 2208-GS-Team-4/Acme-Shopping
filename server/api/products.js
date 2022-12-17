const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { Product } = require("../db");
const { authenticateUser } = require('./helpers/authUserMiddleware');

// GETlocalhost:3000/api/products
router.get("/", async (req, res, next) => {
  const allProducts = await Product.findAll();
  res.send(allProducts);
});

// GETlocalhost:3000/api/products/testAuth
router.get('/testAuth', authenticateUser, (req, res, next) => {
  console.log('api route hit')
  const { role } = req.user;
  if(role!=='admin'){
      return res.sendStatus(403);
  };
  res.send('This user is an admin');
});

// GETlocalhost:3000/api/products
router.post("/",authenticateUser,async (req, res, next) => {
    console.log('api route hit')
    const { role } = req.user;
    if(role!=='admin'){
        return res.sendStatus(403);
    };
    // const data = {
    //   name,
    //   description,
    //   color,
    //   price,
    //   type,
    //   gender
    //   } = req.body;
    await Product.create(req.body)
    //console.log(req.body);
    res.sendStatus(200);
  });

// router.post("/",async (req, res, next) => {
//     console.log(req.body);
//     //await Product.create(req.body)
//     res.sendStatus(200);
// });

module.exports = router;