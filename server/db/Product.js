const Sequelize = require("sequelize");
const db = require("./db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "/img/default.jpg",
  },
  description: {
    type: Sequelize.TEXT,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  color: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DECIMAL(6, 2),
  },
  // Commenting this out to test running seed file -> need to add sizes to seed objects
  option: {
    type: Sequelize.JSON,
    defaultValue: [
      { size: "S", stock: 100 },
      { size: "M", stock: 100 },
      { size: "L", stock: 100 },
    ]
  },
  type: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;
