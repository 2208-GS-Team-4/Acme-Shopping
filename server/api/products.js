const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { Product } = require("../db");
const { authenticateUser } = require('./helpers/authUserMiddleware');

// GETlocalhost:3000/api/products
// router.get("/", async (req, res, next) => {
//   const allProducts = await Product.findAll();
//   res.send(allProducts);
// });

// GETlocalhost:3000/api/products/testAuth
// router.get('/testAuth', authenticateUser, (req, res, next) => {
//     //if(req.user.isAdmin === false) return res.sendStatus(404)
//     const userInfo = req.user;
//     //console.log(userInfo.username);
//     res.send(userInfo);
// });

// router.get('/testAddProduct', authenticateUser, (req, res, next) => {
//     const userInfo = req.user;
//     if(userInfo.dataValues.isAdmin){
//         res.send('This user is admin.');
//     }else{
//         res.send('This user is not admin.');
//     };
// });

// GETlocalhost:3000/api/products
// router.post("/",authenticateUser,async (req, res, next) => {
//     console.log('api route hit')
//     if(req.user.dataValues.isAdmin){
//         const data = {
//             name,
//             description,
//             color,
//             price,
//             type,
//             gender
//         } = req.body;
//         await Product.create(data)
//         res.sendStatus(200);
//     };
//   });

router.post("/",async (req, res, next) => {
    const data = {
        name,
        description,
        color,
        price,
        type,
        gender
    } = req.body;
    await Product.create(data)
    res.sendStatus(200);
});

module.exports = router;