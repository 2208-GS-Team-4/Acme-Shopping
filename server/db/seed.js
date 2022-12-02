const db = require("./db");
const { User, Cart, Product, Order, OrderProduct, CartProduct } = require("./index.js");

const seed = async () => {
    await db.sync({ force: true });

    const [moe, lucy, larry, ethyl] = await Promise.all([
        User.create({ username: 'moe', password: '123' }),
        User.create({ username: 'lucy', password: '123' }),
        User.create({ username: 'larry', password: '123' }),
        User.create({ username: 'ethyl', password: '123' }),
    ]);

    const shirt = await Product.create ({name: "shirt"})
    
    return {
        users: {
            moe,
            lucy,
            larry,
            ethyl
        },
        products: {
            shirt
        }
    };
};

seed();

module.exports = seed;