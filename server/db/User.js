const db = require("./db");
const Sequelize = require("sequelize");
const { STRING, UUID, UUIDV4 } = db.Sequelize;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT = process.env.JWT;

const User = db.define("user", {
  // id: {
  //     type: UUID,
  //     primaryKey: true,
  //     defaultValue: UUIDV4
  // },
  // UNDO THESE AT THE END OF THE PROJECT
  firstName: {
    type: Sequelize.STRING,
    // allowNull: false,
    validate: {},
  },
  lastName: {
    type: Sequelize.STRING,
    // allowNull: false,
    validate: {},
  },
  email: {
    type: Sequelize.STRING,
    // allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  username: {
    type: STRING,
    // allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
    set(value) {
      this.setDataValue("username", value.toLowerCase());
    },
  },
  password: {
    type: STRING,
    // allowNull: false,
    validate: {
      notEmpty: true,
      //len: [10,18],
    },
  },
  shippingAddress: {
    type: Sequelize.STRING,
  },
  billingAddress: {
    type: Sequelize.STRING,
  },
  creditCard: {
    type: Sequelize.JSON,
    // commenting out this validator to create fake data use FakerJS
    //validate: {
    //    isCreditCard: true,
    //}
  },
  //add CVV and expiration date for credit card -- same method as size and quantity
  phone: {
    type: Sequelize.BIGINT,
  },
});

User.addHook("beforeSave", async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 5);
  }
});

User.findByToken = async function (token) {
  try {
    const { id } = jwt.verify(token, process.env.JWT);
    const user = await this.findByPk(id);
    if (user) {
      return user;
    }
    throw "user not found";
  } catch (ex) {
    const error = new Error("bad credentials");
    error.status = 401;
    throw error;
  }
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, JWT);
};

User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({
    where: {
      username,
    },
  });
  if (user && (await bcrypt.compare(password, user.password))) {
    return jwt.sign({ id: user.id }, JWT);
  }
  const error = new Error("bad credentials");
  error.status = 401;
  throw error;
};

module.exports = User;
