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
    defaultValue: "",
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
    type: Sequelize.DECIMAL(5, 2),
  },
  // Commenting this out to test running seed file -> need to add sizes to seed objects
  option: {
    type: Sequelize.JSON,
  },
  type: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;
