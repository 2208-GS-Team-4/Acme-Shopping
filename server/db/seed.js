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
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  //~~~~~~~~~~Mens items~~~~~~~~~~//
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  //~~~~~Mens jacket items~~~~~//
  {
    name: "Wool-Blend Topcoat",
    imageURL: "/img/jacket/mensJacket1.jpg",
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
    imageURL: "/img/jacket/mensJacket2.jpg",
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
    imageURL: "/img/jacket/mensJacket3.jpg",
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
    imageURL: "/img/jacket/mensJacket4.jpg",
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
    imageURL: "/img/jacket/mensJacket5.jpg",
    description:
      "A topcoat is a staple in every sharp-dressed man's wardrobe. Pair this wool-blend coat with denim for a polished look or with suiting for all of your formal events this season",
    color: "Black",
    price: "299.99",
    stock: "10",
    type: "Jacket",
    gender: "Men",
  },
  //~~~~~Mens sweater items~~~~~//
  {
    name: "Cable Knit CrewNeck Sweater",
    imageURL: "/img/sweater/mensSweater1.jpg",
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
    imageURL: "/img/sweater/mensSweater2.jpg",
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
    imageURL: "/img/sweater/mensSweater3.jpg",
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
    imageURL: "/img/sweater/mensSweater4.jpg",
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
    imageURL: "/img/sweater/mensSweater5.jpg",
    description:
      "An everyday staple for cold weather months, this v-neck sweater is a versatile choice and pairs well any of your favorite bottoms",
    color: "Gray",
    price: "99.99",
    stock: "10",
    type: "Sweater",
    gender: "Men",
  },
  //~~~~~Mens pants items~~~~~//
  {
    name: "Slim Light Wash Stretch Jeans",
    imageURL: "/img/pants/mensPants1.jpg",
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
    imageURL: "/img/pants/mensPants2.jpg",
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
    imageURL: "/img/pants/mensPants3.jpg",
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
    imageURL: "/img/pants/mensPants4.jpg",
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
    imageURL: "/img/pants/mensPants5.jpg",
    description:
      "This slim straight jean is made with our highest level of stretch to keep you comfortable no matter where the day takes you. Featured in a stylish warm stone wash to bring new life to your wardrobe",
    color: "Light Brown",
    price: "99.99",
    stock: "10",
    type: "Pants",
    gender: "Men",
  },
  //~~~~~Mens shirt items~~~~~//
  {
    name: "Slim Geo Print Stretch Corduroy Shirt",
    imageURL: "/img/shirt/mensShirt1,jpg",
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
    imageURL: "/img/shirts/mensShirt2.jpg",
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
    imageURL: "/img/shirts/mensShirt3.jpg",
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
    imageURL: "/img/shirts/mensShirt4.jpg",
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
    imageURL: "/img/shirts/mensShirt4.jpg",
    description:
      "An dressier, ultra-soft flannel infused with stretch and featured in a classic plaid for versatile style. Pair with dark denim for an everyday look",
    color: "Dark Brown",
    price: "79.99",
    stock: "10",
    type: "Jacket",
    gender: "Men",
  },
  //~~~~~Mens underwear items~~~~~//
  {
    name: "Men's Boxers 3-Pack",
    imageURL: "/img/underwear/mensUnderwear1.jpg",
    description:
      "Pack includes 3 pairs of boxer shorts, each in a different color, print or pattern. Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "Assorted",
    price: "20.00",
    stock: "10",
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxers 3-Pack",
    imageURL: "/img/underwear/mensUnderwear2.jpg",
    description:
      "Pack includes 3 pairs of boxer shorts, each in a different color, print or pattern. Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "Assorted",
    price: "29.99",
    stock: "10",
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxer Brief 5-Pack",
    imageURL: "/img/underwear/mensUnderwear3.jpg",
    description:
      "Pack includes 5 pairs of boxer brief underwear, each in a different print, pattern or color. Elastic comfort waistband. Fly front. Soft-washed cotton jersey for the ultimate soft underwear. We put it through the wringer so you don't have to.n Engineered with innovative Built-In Flex stretch technology. Equal parts comfort & movement. Flexin' on 'em.",
    color: "Assorted",
    price: "20.00",
    stock: "10",
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxer Brief 10-Pack",
    imageURL: "/img/underwear/mensUnderwear4.jpg",
    description:
      "Pack includes 10 pairs of boxer brief underwear, each in a different print, pattern or color. Elastic comfort waistband. Fly front. Soft-washed cotton jersey for the ultimate soft underwear. We put it through the wringer so you don't have to.n Engineered with innovative Built-In Flex stretch technology. Equal parts comfort & movement. Flexin' on 'em.",
    color: "Assorted",
    price: "59.99",
    stock: "10",
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxer Single",
    imageURL: "/img/underwear/mensUnderwear5.jpg",
    description:
      "Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "Red plaid",
    price: "6.99",
    stock: "10",
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxer Single",
    imageURL: "/img/underwear/mensUnderwear6.jpg",
    description:
      "Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "Blue plaid",
    price: "6.99",
    stock: "10",
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxer Single",
    imageURL: "/img/underwear/mensUnderwear7.jpg",
    description:
      "Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "Red Buffalo plaid",
    price: "6.99",
    stock: "10",
    type: "Underwear",
    gender: "Men",
  },
  //~~~~~Mens socks items~~~~~//
  {
    name: "Men’s Ankle Socks 3-Pack",
    imageURL: "/img/underwear/mensSocks1.jpg",
    description:
      "Pack includes 3 pairs of Go-Dry running socks. Rib-knit ankle-length openings. Embroidered Old Navy Active logo. Mesh top for breathability. Cushioned throughout; seamless toe. Superior Go-Dry wicking keeps you dry & comfortable. Soft cotton blend with added stretch.",
    color: "Black",
    price: "13.99",
    stock: "10",
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Men’s Ankle Socks 3-Pack",
    imageURL: "/img/underwear/mensSocks2.jpg",
    description:
      "Pack includes 3 pairs of Go-Dry running socks. Rib-knit ankle-length openings. Embroidered Old Navy Active logo. Mesh top for breathability. Cushioned throughout; seamless toe. Superior Go-Dry wicking keeps you dry & comfortable. Soft cotton blend with added stretch.",
    color: "White",
    price: "13.99",
    stock: "10",
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Men’s Classic Socks 3-Pack",
    imageURL: "/img/underwear/mensSocks3.jpg",
    description:
      "Pack includes 3 pairs of training socks. Breathable mesh top lets you vent. Go-Dry moisture-wicking technology keeps you dry & comfortable. Cushioned heel and toe for added comfort. Soft, microfiber knit, with comfortable stretch. Old Navy Active logo graphic at ribbed openings.",
    color: "Black",
    price: "15.99",
    stock: "10",
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Men’s Classic Socks 3-Pack",
    imageURL: "/img/underwear/mensSocks4.jpg",
    description:
      "Pack includes 3 pairs of training socks. Breathable mesh top lets you vent. Go-Dry moisture-wicking technology keeps you dry & comfortable. Cushioned heel and toe for added comfort. Soft, microfiber knit, with comfortable stretch. Old Navy Active logo graphic at ribbed openings.",
    color: "Assored",
    price: "15.99",
    stock: "10",
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Men’s Classic Tube Sock Single Pair",
    imageURL: "/img/underwear/mensSocks5.jpg",
    description:
      "Rib-knit cuffs and tube-style openings with multi-color stripes. Soft-knit fabric. with comfortable stretch. Notched seams at toe and heel for added comfort.",
    color: "Grey",
    price: "7.99",
    stock: "10",
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Pop culture Gender neutral socks 3 pack",
    imageURL: "/img/underwear/mensSocks6.jpg",
    description:
      "Pack includes 3 pairs of graphic socks, featuring your favorite licensed pop-culture characters. These licensed graphic socks are totally classic & gender neutral, too. Wearable & shareable for you, for him, for her, for them! Contrasting rib-knit openings and notched toes. Soft-knit fabric, with comfortable stretch.",
    color: "Assored",
    price: "19.99",
    stock: "10",
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Pop culture Gender neutral socks 3 pack",
    imageURL: "/img/underwear/mensSocks7.jpg",
    description:
      "Pack includes 3 pairs of graphic socks, featuring your favorite licensed pop-culture characters. These licensed graphic socks are totally classic & gender neutral, too. Wearable & shareable for you, for him, for her, for them! Contrasting rib-knit openings and notched toes. Soft-knit fabric, with comfortable stretch.",
    color: "Assored",
    price: "19.99",
    stock: "10",
    type: "Socks",
    gender: "Men",
  },

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  //~~~~~~~~~Womens items~~~~~~~~~//
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
];

const seed = async () => {
  await db.sync({ force: true });

  const [moe, lucy, larry, ethyl] = await Promise.all([
    User.create({ username: "moe", password: "123" }),
    User.create({ username: "lucy", password: "123" }),
    User.create({ username: "larry", password: "123" }),
    User.create({ username: "ethyl", password: "123" }),
  ]);

  // updating out variable names here!
  const [
    // Mens items start here in order
    mensJacketOne,
    mensJacketTwo,
    mensJacketThree,
    mensJacketFour,
    mensJacketFive,
    mensSweaterOne,
    mensSweaterTwo,
    mensSweaterThree,
    mensSweaterFour,
    mensSweaterFive,
    mensPantsOne,
    mensPantsTwo,
    mensPantsThree,
    mensPantsFour,
    mensPantsFive,
    mensShirtOne,
    mensShirtTwo,
    mensShirtThree,
    mensShirtFour,
    mensShirtFive,
    mensUnderwear1,
    mensUnderwear2,
    mensUnderwear3,
    mensUnderwear4,
    mensUnderwear5,
    mensUnderwear6,
    mensUnderwear7,
    mensSocks1,
    mensSocks2,
    mensSocks3,
    mensSocks4,
    mensSocks5,
    mensSocks6,
    mensSocks7,

    // Womens items start here in order
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
