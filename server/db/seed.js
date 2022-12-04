const db = require("./db");
const {
  User,
  Cart,
  Product,
  Order,
  OrderProduct,
  CartProduct,
} = require("./index.js");

const productsList = [
  {
    name: "Wool-Blend Topcoat",
    imageURL: "/img/jacket/jacket1.jpg",
    description:
      "A topcoat is a staple in every sharp-dressed man's wardrobe. Pair this one over sweaters for effortless styling",
    color: "Blue",
    price: "249.99",
    stock: "10",
    type: "Jacket",
    gender: "Men",
  },
  {
    name: "Puffer Bomber Jacket",
    imageURL: "/img/jacket/jacket2.jpg",
    description:
      "Warm-up your looks with this effortless puffer bomber jacket. Pair with jeans or chinos for the perfect everyday look",
    color: "Gray",
    price: "249.99",
    stock: "10",
    type: "Jacket",
    gender: "Men",
  },
  {
    name: " Wool-Blend Hooded Topcoat",
    imageURL: "/img/jacket/jacket3.jpg",
    description:
      "With a twist on the classic, this wool-blend topcoat features a drawstring hood and a covered zip closure. Pair with jeans and boots for a casual look",
    color: "Brown",
    price: "249.99",
    stock: "10",
    type: "Jacket",
    gender: "Men",
  },
  {
    name: "Wool-Blend Trucker Jacket",
    imageURL: "/img/jacket/jacket4.jpg",
    description:
      "The perfect classic trucker jacket in a navy wool-blend fabric. Add this to any outfit to keep cozy on cool days and chilly nights",
    color: "Blue",
    price: "199.99",
    stock: "10",
    type: "Jacket",
    gender: "Men",
  },
  {
    name: "Wool-Blend Water Resistant Topcoat",
    imageURL: "/img/jacket/jacket5.jpg",
    description:
      "A topcoat is a staple in every sharp-dressed man's wardrobe. Pair this wool-blend coat with denim for a polished look or with suiting for all of your formal events this season",
    color: "Black",
    price: "299.99",
    stock: "10",
    type: "Jacket",
    gender: "Men",
  },
  {
    name: "Cable Knit CrewNeck Sweater",
    imageURL: "/img/sweater/sweater1.jpg",
    description:
      "A winter classic, this cable knit crewneck sweater is the perfect cold weather essential. Complete the look with jeans or chinos for a sleek look",
    color: "White",
    price: "99.99",
    stock: "10",
    type: "Sweater",
    gender: "Men",
  },
  {
    name: "Waffle Knit Shawl Collar Cardigan",
    imageURL: "/img/sweater/sweater2.jpg",
    description:
      "A classic layering choice to keep you warm this season. This waffle knit cardigan looks great over tees, button-ups and more - we love a versatile piece",
    color: "Black",
    price: "99.99",
    stock: "10",
    type: "Sweater",
    gender: "Men",
  },
  {
    name: "Vine Cable Knit CrewNeck Sweater",
    imageURL: "/img/sweater/sweater3.jpg",
    description:
      "A winter classic with a unique cable knit pattern, this crewneck sweater brings a fun twist to a cold weather essential. Complete the look with jeans or chinos for a sleek look",
    color: "Blue",
    price: "99.99",
    stock: "10",
    type: "Sweater",
    gender: "Men",
  },
  {
    name: "Solid Mock Neck Quarter Zip Sweater",
    imageURL: "/img/sweater/sweater4.jpg",
    description:
      "A cozy, ribbed sweater featuring a mock neck and quarter-zip front that's perfect for cool days and chilly nights. Pair with jeans, joggers or chinos for a polished casual look",
    color: "Brown",
    price: "119.99",
    stock: "10",
    type: "Sweater",
    gender: "Men",
  },
  {
    name: "V-Neck Popover Sweater",
    imageURL: "/img/sweater/sweater5.jpg",
    description:
      "An everyday staple for cold weather months, this v-neck sweater is a versatile choice and pairs well any of your favorite bottoms",
    color: "Gray",
    price: "99.99",
    stock: "10",
    type: "Sweater",
    gender: "Men",
  },
  {
    name: "Slim Light Wash Stretch Jeans",
    imageURL: "/img/pants/pants1.jpg",
    description:
      "This slim light wash jean features the perfect amount of stretch for all-day comfort. Throw on with sweaters or tees or a put together look",
    color: "Blue",
    price: "99.99",
    stock: "10",
    type: "Pants",
    gender: "Men",
  },
  {
    name: "Slim Dark Wash Selvedge Jeans",
    imageURL: "/img/pants/pants2.jpg",
    description:
      "Woven on a vintage shuttle loom which provides a highly desirable irregular yarn character indicative of prized premium denim. This guarantees that no two jeans are identical. Every jean is unique",
    color: "Dark Blue",
    price: "149.99",
    stock: "10",
    type: "Pants",
    gender: "Men",
  },
  {
    name: "Slim Hyper Stretch Jeans",
    imageURL: "/img/pants/pants3.jpg",
    description:
      "Our hyper stretch jeans are constructed with the maximum amount of stretch for all day comfort. Featuring a slim fit in a trendy color that provides a versatile look that pairs with any outfit",
    color: "Brown",
    price: "99.99",
    stock: "10",
    type: "Pants",
    gender: "Men",
  },
  {
    name: "Slim Straight Medium Wash Hyper Stretch Jeans",
    imageURL: "/img/pants/pants4.jpg",
    description:
      "These slim straight jeans feature our highest level of stretch for all-day comfort. Made in a versatile medium wash that's perfect for work or play",
    color: "Blue",
    price: "99.99",
    stock: "10",
    type: "Pants",
    gender: "Men",
  },
  {
    name: "Slim Straight Warm Stone Hyper Stretch Jeans",
    imageURL: "/img/pants/pants5.jpg",
    description:
      "This slim straight jean is made with our highest level of stretch to keep you comfortable no matter where the day takes you. Featured in a stylish warm stone wash to bring new life to your wardrobe",
    color: "Light Brown",
    price: "99.99",
    stock: "10",
    type: "Pants",
    gender: "Men",
  },
  {
    name: "Slim Geo Print Stretch Corduroy Shirt",
    imageURL: "/img/shirt/shirt1,jpg",
    description:
      "A soft, stretchy corduroy in a trendy geo print for the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling",
    color: "red",
    price: "79.99",
    stock: "10",
    type: "Shirt",
    gender: "Men",
  },
  {
    name: "Floral Stretch Corduroy Shirt",
    imageURL: "/img/shirts/shirt2.jpg",
    description:
      "A soft, stretchy corduroy in a floral print for the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling as we head into fall",
    color: "Blue",
    price: "79.99",
    stock: "10",
    type: "Shirt",
    gender: "Men",
  },
  {
    name: "Floral Stretch Corduroy Shirt",
    imageURL: "/img/shirts/shirt3.jpg",
    description:
      "A soft, stretchy corduroy in a floral print for the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling",
    color: "",
    price: "",
    stock: "10",
    type: "Shirt",
    gender: "Men",
  },
  {
    name: "Solid Corduroy Shirt",
    imageURL: "/img/shirts/shirt4.jpg",
    description:
      "A corduroy shirt is the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling",
    color: "Gray",
    price: "79.99",
    stock: "10",
    type: "Shirt",
    gender: "Men",
  },
  {
    name: "Slim plaid Stretch Flannel Shirt",
    imageURL: "/img/shirts/shirt4.jpg",
    description:
      "An dressier, ultra-soft flannel infused with stretch and featured in a classic plaid for versatile style. Pair with dark denim for an everyday look",
    color: "Dark Brown",
    price: "79.99",
    stock: "10",
    type: "Jacket",
    gender: "Men",
  },
];

const seed = async () => {
  await db.sync({ force: true });

  const [moe, lucy, larry, ethyl] = await Promise.all([
    User.create({ username: "moe", password: "123" }),
    User.create({ username: "lucy", password: "123" }),
    User.create({ username: "larry", password: "123" }),
    User.create({ username: "ethyl", password: "123" }),
  ]);

  const [
    jacketOne,
    jacketTwo,
    jacketThree,
    jacketFour,
    jacketFive,
    sweaterOne,
    sweaterTwo,
    sweaterThree,
    sweaterFour,
    sweaterFive,
    pantsOne,
    pantsTwo,
    pantsThree,
    pantsFour,
    pantsFive,
    shirtOne,
    shirtTwo,
    shirtThree,
    shirtFour,
    shirtFive,
  ] = await Promise.all(productsList.map((singleProduct) => Product.create(singleProduct)));

  return {
    users: {
      moe,
      lucy,
      larry,
      ethyl,
    },
    products: {
      shirt,
    },
  };
};

seed();

module.exports = seed;
