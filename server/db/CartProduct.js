const Sequelize = require("sequelize");
const db = require("./db");

const CartProduct = db.define('cartproduct', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    quantity: {
        type: Sequelize.INTEGER
        },
    size: {
        type: Sequelize.STRING
        },
    price: {
        type: Sequelize.DECIMAL(5,2)
        },
    })

module.exports = CartProduct;


// const ActorMovies = sequelize.define('ActorMovies', {
//     MovieId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Movie, // 'Movies' would also work
//         key: 'id'
//       }
//     },
//     ActorId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Actor, // 'Actors' would also work
//         key: 'id'
//       }
//     }
//   });
//   Movie.belongsToMany(Actor, { through: ActorMovies });
//   Actor.belongsToMany(Movie, { through: ActorMovies });