const db = require('./db');
const User = require('./User');
const Cart = require("./Cart")
const Product = require("./Product")
const Order = require("./Order")
const OrderProduct = require("./OrderProduct")
const CartProduct = require("./CartProduct")

//ASSOCIATIONS GO HERE

// Cart table has UserId
User.hasOne(Cart);
Cart.belongsTo(User);

//Joined with CartProduct quantity/price | MAKE SURE TO DO LOWERCASE CARTPRODUCT TO SEE IN PSQL
Cart.belongsToMany(Product,{through: CartProduct});
Product.belongsToMany(Cart,{through: CartProduct});

//Order table has UserId
Order.belongsTo(User);
User.hasMany(Order);

//Joined with OrderProduct quantity/price | MAKE SURE TO DO LOWERCASE ORDERPRODUCT TO SEE IN PSQL
Order.belongsToMany(Product,{through: OrderProduct});
Product.belongsToMany(Order,{through: OrderProduct});

module.exports = {
    User,
    Cart,
    Product,
    Order,
    OrderProduct,
    CartProduct,
    db
};