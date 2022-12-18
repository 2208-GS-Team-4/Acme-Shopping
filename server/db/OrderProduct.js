const Sequelize = require("sequelize");
const db = require("./db");

const OrderProduct = db.define("orderproduct", {
  quantity: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.DECIMAL(5, 2),
  },
  size: { type: Sequelize.STRING },
  name: {
    type: Sequelize.STRING,
  },
  imageURL: {
    type: Sequelize.STRING,
  },
});

module.exports = OrderProduct;
