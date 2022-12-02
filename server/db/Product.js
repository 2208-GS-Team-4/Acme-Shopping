const Sequelize = require("sequelize");
const db = require("./db");

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
    },
    imageURL: {
        type: Sequelize.STRING,
        defaultValue: ""
    },
    description: {
        type: Sequelize.TEXT,
        // allowNull: false,
        validate: {
          notEmpty: true,
        },
    },
    color:{ type: Sequelize.STRING,},
    price:{ type: Sequelize.DECIMAL(5,2)},
    size: {
      type: Sequelize.ENUM,
      values: ['S','M','L']
    },
    stock: {type: Sequelize.INTEGER,},
});

module.exports = Product;