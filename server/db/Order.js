const Sequelize = require("sequelize");
const db = require("./db");

const Order = db.define("order", {
  total: {
    type: Sequelize.DECIMAL(9, 2),
  },
  status: {
    type: Sequelize.ENUM,
    values: ["unpaid", "placed", "in-progress", "completed", "cancelled"],
  },
});

module.exports = Order;
