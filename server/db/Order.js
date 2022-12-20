const Sequelize = require("sequelize");
const db = require("./db");

const Order = db.define("order", {
  total: {
    type: Sequelize.DECIMAL(9, 2),
  },
  status: {
    type: Sequelize.ENUM,
    values: ["placed", "in-progress", "completed", "cancelled"],
  },
  contactName: { type: Sequelize.STRING },
  contactPhone: {
    type: Sequelize.BIGINT,
  },
  contactEmail: {
    type: Sequelize.STRING,
    // allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  shippingOption: { type: Sequelize.STRING },
});

module.exports = Order;
