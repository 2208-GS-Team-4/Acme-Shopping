const Sequelize = require("sequelize");
const db = require("./db");

const Cart = db.define("cart", {
  total: {
    type: Sequelize.DECIMAL(9, 2),
  },
});

module.exports = Cart;
