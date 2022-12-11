const db = require("./db");
const {
  User,
  Cart,
  Product,
  Order,
  OrderProduct,
  CartProduct,
} = require("./index.js");

//-------------------------Men's Products--------------------------//
let mensJackets = [
  {
    name: "Wool-Blend Topcoat",
    imageURL: "/img/jacket/mensJacket1.jpg",
    description:
      "A topcoat is a staple in every sharp-dressed man's wardrobe. Pair this one over sweaters for effortless styling",
    color: "blue",
    price: 249.99,
    stock: 10,
    type: "jacket",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Puffer Bomber Jacket",
    imageURL: "/img/jacket/mensJacket2.jpg",
    description:
      "Warm-up your looks with this effortless puffer bomber jacket. Pair with jeans or chinos for the perfect everyday look",
    color: "gray",
    price: 249.99,
    stock: 10,
    type: "jacket",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Wool-Blend Hooded Topcoat",
    imageURL: "/img/jacket/mensJacket3.jpg",
    description:
      "With a twist on the classic, this wool-blend topcoat features a drawstring hood and a covered zip closure. Pair with jeans and boots for a casual look",
    color: "brown",
    price: 249.99,
    stock: 10,
    type: "jacket",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Wool-Blend Trucker Jacket",
    imageURL: "/img/jacket/mensJacket4.jpg",
    description:
      "The perfect classic trucker jacket in a navy wool-blend fabric. Add this to any outfit to keep cozy on cool days and chilly nights",
    color: "blue",
    price: 199.99,
    stock: 10,
    type: "jacket",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Wool-Blend Water Resistant Topcoat",
    imageURL: "/img/jacket/mensJacket5.jpg",
    description:
      "A topcoat is a staple in every sharp-dressed man's wardrobe. Pair this wool-blend coat with denim for a polished look or with suiting for all of your formal events this season",
    color: "black",
    price: 299.99,
    stock: 10,
    type: "jacket",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  }
];
let mensSweaters = [
  {
    name: "Cable Knit CrewNeck Sweater",
    imageURL: "/img/sweater/mensSweater1.jpg",
    description:
      "A winter classic, this cable knit crewneck sweater is the perfect cold weather essential. Complete the look with jeans or chinos for a sleek look",
    color: "white",
    price: 99.99,
    stock: 10,
    type: "sweater",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Waffle Knit Shawl Collar Cardigan",
    imageURL: "/img/sweater/mensSweater2.jpg",
    description:
      "A classic layering choice to keep you warm this season. This waffle knit cardigan looks great over tees, button-ups and more - we love a versatile piece",
    color: "black",
    price: 99.99,
    stock: 10,
    type: "sweater",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Vine Cable Knit CrewNeck Sweater",
    imageURL: "/img/sweater/mensSweater3.jpg",
    description:
      "A winter classic with a unique cable knit pattern, this crewneck sweater brings a fun twist to a cold weather essential. Complete the look with jeans or chinos for a sleek look",
    color: "blue",
    price: 99.99,
    stock: 10,
    type: "sweater",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Solid Mock Neck Quarter Zip Sweater",
    imageURL: "/img/sweater/mensSweater4.jpg",
    description:
      "A cozy, ribbed sweater featuring a mock neck and quarter-zip front that's perfect for cool days and chilly nights. Pair with jeans, joggers or chinos for a polished casual look",
    color: "brown",
    price: 119.99,
    stock: 10,
    type: "sweater",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "V-Neck Popover Sweater",
    imageURL: "/img/sweater/mensSweater5.jpg",
    description:
      "An everyday staple for cold weather months, this v-neck sweater is a versatile choice and pairs well any of your favorite bottoms",
    color: "gray",
    price: 99.99,
    stock: 10,
    type: "sweater",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  
];
let mensPants = [
  {
    name: "Slim Light Wash Stretch Jeans",
    imageURL: "/img/pants/mensPants1.jpg",
    description:
      "This slim light wash jean features the perfect amount of stretch for all-day comfort. Throw on with sweaters or tees or a put together look",
    color: "blue",
    price: 99.99,
    stock: 10,
    type: "pants",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Slim Dark Wash Selvedge Jeans",
    imageURL: "/img/pants/mensPants2.jpg",
    description:
      "Woven on a vintage shuttle loom which provides a highly desirable irregular yarn character indicative of prized premium denim. This guarantees that no two jeans are identical. Every jean is unique",
    color: "dark blue",
    price: 149.99,
    stock: 10,
    type: "pants",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Slim Hyper Stretch Jeans",
    imageURL: "/img/pants/mensPants3.jpg",
    description:
      "Our hyper stretch jeans are constructed with the maximum amount of stretch for all day comfort. Featuring a slim fit in a trendy color that provides a versatile look that pairs with any outfit",
    color: "brown",
    price: 99.99,
    stock: 10,
    type: "pants",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Slim Straight Medium Wash Hyper Stretch Jeans",
    imageURL: "/img/pants/mensPants4.jpg",
    description:
      "These slim straight jeans feature our highest level of stretch for all-day comfort. Made in a versatile medium wash that's perfect for work or play",
    color: "blue",
    price: 99.99,
    stock: 10,
    type: "pants",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Slim Straight Warm Stone Hyper Stretch Jeans",
    imageURL: "/img/pants/mensPants5.jpg",
    description:
      "This slim straight jean is made with our highest level of stretch to keep you comfortable no matter where the day takes you. Featured in a stylish warm stone wash to bring new life to your wardrobe",
    color: "light brown",
    price: 99.99,
    stock: 10,
    type: "pants",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
];
let mensShirts = [
  {
    name: "Slim Geo Print Stretch Corduroy Shirt",
    imageURL: "/img/shirts/mensShirt1.jpg",
    description:
      "A soft, stretchy corduroy in a trendy geo print for the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling",
    color: "red",
    price: 79.99,
    stock: 10,
    type: "shirt",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Slim Geo Print Stretch Corduroy Shirt",
    imageURL: "/img/shirts/mensShirt1.jpg",
    description:
      "A soft, stretchy corduroy in a trendy geo print for the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling",
    color: "red",
    price: 79.99,
    stock: 10,
    type: "shirt",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Slim Geo Print Stretch Corduroy Shirt",
    imageURL: "/img/shirts/mensShirt1.jpg",
    description:
      "A soft, stretchy corduroy in a trendy geo print for the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling",
    color: "red",
    price: 79.99,
    stock: 10,
    type: "shirt",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Floral Stretch Corduroy Shirt",
    imageURL: "/img/shirts/mensShirt2.jpg",
    description:
      "A soft, stretchy corduroy in a floral print for the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling as we head into fall",
    color: "blue",
    price: 79.99,
    stock: 10,
    type: "shirt",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Floral Stretch Corduroy Shirt",
    imageURL: "/img/shirts/mensShirt3.jpg",
    description:
      "A soft, stretchy corduroy in a floral print for the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling",
    color: "black/Grey",
    price: 79.99,
    stock: 10,
    type: "shirt",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Solid Corduroy Shirt",
    imageURL: "/img/shirts/mensShirt4.jpg",
    description:
      "A corduroy shirt is the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling",
    color: "gray",
    price: 79.99,
    stock: 10,
    type: "shirt",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
  {
    name: "Slim plaid Stretch Flannel Shirt",
    imageURL: "/img/shirts/mensShirt4.jpg",
    description:
      "An dressier, ultra-soft flannel infused with stretch and featured in a classic plaid for versatile style. Pair with dark denim for an everyday look",
    color: "brown",
    price: 79.99,
    stock: 10,
    type: "shirt",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ]
  },
];

//~~~~~Mens underwear items~~~~~//
let mensUnderwear = [
  {
    name: "Men's Boxers 3-Pack",
    imageURL: "/img/underwear/mensUnderwear1.jpg",
    description:
      "Pack includes 3 pairs of boxer shorts, each in a different color, print or pattern. Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "assorted",
    price: 20.0,
    type: "underwear",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Men's Boxers 3-Pack",
    imageURL: "/img/underwear/mensUnderwear2.jpg",
    description:
      "Pack includes 3 pairs of boxer shorts, each in a different color, print or pattern. Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "assorted",
    price: 29.99,
    type: "underwear",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Men's Boxer Brief 5-Pack",
    imageURL: "/img/underwear/mensUnderwear3.jpg",
    description:
      "Pack includes 5 pairs of boxer brief underwear, each in a different print, pattern or color. Elastic comfort waistband. Fly front. Soft-washed cotton jersey for the ultimate soft underwear. We put it through the wringer so you don't have to.n Engineered with innovative Built-In Flex stretch technology. Equal parts comfort & movement. Flexin' on 'em.",
    color: "assorted",
    price: 20.0,
    type: "underwear",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Men's Boxer Brief 10-Pack",
    imageURL: "/img/underwear/mensUnderwear4.jpg",
    description:
      "Pack includes 10 pairs of boxer brief underwear, each in a different print, pattern or color. Elastic comfort waistband. Fly front. Soft-washed cotton jersey for the ultimate soft underwear. We put it through the wringer so you don't have to.n Engineered with innovative Built-In Flex stretch technology. Equal parts comfort & movement. Flexin' on 'em.",
    color: "assorted",
    price: 59.99,
    type: "underwear",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Men's Boxer Single",
    imageURL: "/img/underwear/mensUnderwear5.jpg",
    description:
      "Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "red plaid",
    price: 6.99,
    type: "underwear",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Men's Boxer Single",
    imageURL: "/img/underwear/mensUnderwear6.jpg",
    description:
      "Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "blue plaid",
    price: 6.99,
    type: "underwear",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Men's Boxer Single",
    imageURL: "/img/underwear/mensUnderwear7.jpg",
    description:
      "Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "red Buffalo plaid",
    price: 6.99,
    type: "underwear",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
];

//~~~~~Mens socks items~~~~~//
let mensSocks = [
  {
    name: "Men’s Ankle Socks 3-Pack",
    imageURL: "/img/socks/mensSocks1.jpg",
    description:
      "Pack includes 3 pairs of Go-Dry running socks. Rib-knit ankle-length openings. Embroidered Old Navy Active logo. Mesh top for breathability. Cushioned throughout; seamless toe. Superior Go-Dry wicking keeps you dry & comfortable. Soft cotton blend with added stretch.",
    color: "black",
    price: 13.99,
    type: "socks",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Men’s Ankle Socks 3-Pack",
    imageURL: "/img/socks/mensSocks2.jpg",
    description:
      "Pack includes 3 pairs of Go-Dry running socks. Rib-knit ankle-length openings. Embroidered Old Navy Active logo. Mesh top for breathability. Cushioned throughout; seamless toe. Superior Go-Dry wicking keeps you dry & comfortable. Soft cotton blend with added stretch.",
    color: "white",
    price: 13.99,
    type: "socks",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Men’s Classic Socks 3-Pack",
    imageURL: "/img/socks/mensSocks3.jpg",
    description:
      "Pack includes 3 pairs of training socks. Breathable mesh top lets you vent. Go-Dry moisture-wicking technology keeps you dry & comfortable. Cushioned heel and toe for added comfort. Soft, microfiber knit, with comfortable stretch. Old Navy Active logo graphic at ribbed openings.",
    color: "black",
    price: 15.99,
    type: "socks",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Men’s Classic Socks 3-Pack",
    imageURL: "/img/socks/mensSocks4.jpg",
    description:
      "Pack includes 3 pairs of training socks. Breathable mesh top lets you vent. Go-Dry moisture-wicking technology keeps you dry & comfortable. Cushioned heel and toe for added comfort. Soft, microfiber knit, with comfortable stretch. Old Navy Active logo graphic at ribbed openings.",
    color: "assored",
    price: 15.99,
    type: "socks",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Men’s Classic Tube Sock Single Pair",
    imageURL: "/img/socks/mensSocks5.jpg",
    description:
      "Rib-knit cuffs and tube-style openings with multi-color stripes. Soft-knit fabric. with comfortable stretch. Notched seams at toe and heel for added comfort.",
    color: "grey",
    price: 7.99,
    type: "socks",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Pop culture Gender neutral socks 3 pack",
    imageURL: "/img/socks/mensSocks6.jpg",
    description:
      "Pack includes 3 pairs of graphic socks, featuring your favorite licensed pop-culture characters. These licensed graphic socks are totally classic & gender neutral, too. Wearable & shareable for you, for him, for her, for them! Contrasting rib-knit openings and notched toes. Soft-knit fabric, with comfortable stretch.",
    color: "assored",
    price: 19.99,
    type: "socks",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Pop culture Gender neutral socks 3 pack",
    imageURL: "/img/socks/mensSocks7.jpg",
    description:
      "Pack includes 3 pairs of graphic socks, featuring your favorite licensed pop-culture characters. These licensed graphic socks are totally classic & gender neutral, too. Wearable & shareable for you, for him, for her, for them! Contrasting rib-knit openings and notched toes. Soft-knit fabric, with comfortable stretch.",
    color: "assored",
    price: 19.99,
    type: "socks",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
];
//~~~~~Mens hat items~~~~~//
let mensHats = [
  {
    name: "Reversible Twill Bucket Hat",
    imageURL: "/img/hat/mensHat1.1.jpg",
    description:
      "This hat is totally classic and gender-neutral, too. Wearable & shareable for you, for him, for her, for them! 100% Cotton.",
    color: "navy blue/blue tropical",
    price: 9.97,
    type: "hat",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Classic Baseball Brim",
    imageURL: "/img/hat/mensHat2.jpg",
    description:
      "This baseball cap is totally classic & gender neutral, too. Wearable & shareable for you, for him, for her, for them.",
    color: "off-white/Ammonite",
    price: 6.99,
    type: "hat",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
  {
    name: "Red Knit Beanie",
    imageURL: "/img/hat/mensHat3.3.jpg",
    description:
      "This beanie hat is totally cozy & gender-neutral, too. Wearable & shareable for you, for him, for her, for them.",
    color: "assorted",
    price: 9.97,
    type: "hat",
    gender: "men",
    option: [
      { size: "S", stock: 50 },
      { size: "M", stock: 50 },
      { size: "L", stock: 50 },
    ],
  },
];

//-------------------------Women' Products--------------------------//
let womensBlouses = [
  {
    type: "blouse",
    gender: "women",
    name: "fine knit blouse",
    color: "white",
    price: 19.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/blouse/fineKnitBlouse1.png",
    description:
      "Fine knit fabric. Polo neck. Straight design. Button fastening on the front section. Long buttoned sleeve. Fits small to size. The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection.",
  },
  {
    type: "blouse",
    gender: "women",
    name: "floral blouse",
    color: "pink",
    price: 29.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/blouse/floralBlouse1.png",
    description:
      " Satin. Flowy fabric. Floral print. Cropped design. Straight design. Shirt-style collar. Short sleeve. Button fastening on the front section. Knot detail. Co-ord.",
  },
  {
    type: "blouse",
    gender: "women",
    name: "flowy blouse",
    color: "black",
    price: 25.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/blouse/flowyBlouse1.png",
    description:
      "Flowy fabric. Straight design. Shirt-style collar. Long sleeve. Button fastening on the front section.",
  },
  {
    type: "blouse",
    gender: "women",
    name: "polka-dot blouse",
    color: "blue",
    price: 15.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/blouse/polkaDotBlouse1.png",
    description:
      "Sheer fabric. Spots print. Straight design. Cropped design. Crossover design. Shirt-style collar. Long sleeve with ruffle. Side bow fastening. Party and events collection.",
  },
  {
    type: "blouse",
    gender: "women",
    name: "satin print blouse",
    color: "orange",
    price: 35.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/blouse/satinPrintBlouse1.png",
    description:
      "Flowy fabric. Satin. Striped print. Spots print. Straight design. Long design. High collar. Sleeveless. Gathered detail. Bow fastening on the neck.",
  },
];

let womensPants = [
  {
    type: "pants",
    gender: "women",
    name: "flare pants",
    color: "black",
    price: 35.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/pants/flarePants1.png",
    description:
      " Recycled polyester blend fabric. Cropped design. Flared design. Invisible lateral zipper fastening.",
  },

  {
    type: "pants",
    gender: "women",
    name: "flower pants",
    color: "multi",
    price: 25.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/pants/flowerPants1.png",
    description:
      " Recycled polyester blend fabric. Cropped design. Flared design. Invisible lateral zipper fastening.",
  },
  {
    type: "pants",
    gender: "women",
    name: "linen pants",
    color: "orange",
    price: 20.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/pants/linenPants1.png",
    description:
      " Linen fabric. Jogger design. Cropped design. Straight design. Medium waist. Elastic band. Two side pockets. Decorative pockets on the back.",
  },
  {
    type: "pants",
    gender: "women",
    name: "suit pants",
    color: "purple",
    price: 40.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/pants/suitPants1.png",
    description:
      "Recycled polyester material. Medium waist. Long design. Loops. Back pockets. Concealed button, hook and zip fastening.",
  },

  {
    type: "pants",
    gender: "women",
    name: "wide leg pants",
    color: "red",
    price: 30.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/pants/wideLegPants1.png",
    description:
      "Flowy fabric. Suit style. Wide-leg design. Side zip fastening. ",
  },
];
let womensJackets = [
  {
    type: "jacket",
    gender: "women",
    name: "bomber jacket",
    color: "black",
    price: 85.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/jacket/bomberJacket1.png",
    description:
      "100% recycled polyester filling. Bomber design. Quilted design. Oversize design. Stand-up collar. Long sleeve with elastic cuffs. Zip fastening on the front section. Twin buttoned flap pockets at front. Inner lining.",
  },

  {
    type: "jacket",
    gender: "women",
    name: "denim jacket",
    color: "blue",
    price: 55.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/jacket/denimJacket1.png",
    description:
      "Denim style cotton fabric. Straight design. Short design. Shirt-style collar. Long sleeve with buttoned cuffs. Two patch pockets on the chest.",
  },

  {
    type: "jacket",
    gender: "women",
    name: "leather jacket",
    color: "black",
    price: 255.95,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/jacket/leatherJacket1.png",
    description:
      "100% nappa leather. Biker design. Short design. Lapel-collar. Long sleeve. Asymmetric zip fastening. Decorative belt. Two zip pockets on the front. Inner lining.",
  },

  {
    type: "jacket",
    gender: "women",
    name: "shearling jacket",
    color: "brown",
    price: 455.5,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/jacket/shearlingJacket1.png",
    description:
      "Straight design. Short design. Double-sided design. Long sleeve. Zip fastening on the front section. Side pockets. Inner lining.",
  },

  {
    type: "jacket",
    gender: "women",
    name: "tweed jacket",
    color: "pink",
    price: 55.99,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/jacket/tweedJacket1.png",
    description:
      "Cotton-blend fabric. Tweed fabric. Straight design. Long design. Blazer style. Lapel-collar V-neck collar. Long sleeve. Two pockets with flaps. Inner lining. Button fastening on the front.",
  },
];
let womensDresses = [
  {
    type: "dress",
    gender: "women",
    name: "floral dress",
    color: "orange",
    price: 25.99,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/dress/floralDress1.png",
    description:
      "Flowy fabric. Evasé design. Floral print. Short design. Puffed short sleeve. Rounded neck. Back slit. Bow fastening on the back. Button closing on the neck.",
  },

  {
    type: "dress",
    gender: "women",
    name: "midi dress",
    color: "sand",
    price: 35.99,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/dress/midiDress1.png",
    description:
      "Fine knit fabric. Midi design. Tailored design. High collar. Long sleeve.",
  },

  {
    type: "dress",
    gender: "women",
    name: "polka-dot dress",
    color: "blue",
    price: 30.99,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/dress/polkaDotDress1.png",
    description:
      "Flowy fabric. Spots print. Short design. Tailored design. Sweetheart neckline. Sleeveless. Thin straps. Removable straps. Gathered details. Decorative frill detail. Inner lining. Side zip fastening.",
  },

  {
    type: "dress",
    gender: "women",
    name: "sequin dress",
    color: "blue",
    price: 45.99,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/dress/sequinDress1.png",
    description:
      "Sequin fabric. Elastic. Straight design. Short design. Rounded neck. Sleeveless. Inner lining. Button fastening at back.",
  },

  {
    type: "dress",
    gender: "women",
    name: "wrap dress",
    color: "green",
    price: 55.99,
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    imageURL: "/img/dress/wrapDress1.png",
    description:
      "Recycled polyester blend fabric. Long design. Evasé design. Crossover design. V-neck. Long sleeve. Side bow fastening.",
  },
];
let womensHats = [
  {
    type: "hat",
    gender: "women",
    name: "beanie",
    color: "purple",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 5.99,
    imageURL: "/img/hat/beanieHat.png",
    description:
      "Cable knit fabric. Recycled polyester blend fabric. Wool mix fabric.",
  },
  {
    type: "hat",
    gender: "women",
    name: "beret",
    color: "red",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 15.99,
    imageURL: "/img/hat/beretHat.png",
    description: "Beret-style. Knitted braided fabric.",
  },
  {
    type: "hat",
    gender: "women",
    name: "bucket hat",
    color: "brown",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 8.99,
    imageURL: "/img/hat/bucketHat.png",
    description: "Faux fur fabric. Bucket design. Inner lining.",
  },
  {
    type: "hat",
    gender: "women",
    name: "pamela hat",
    color: "beige",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 15.49,
    imageURL: "/img/hat/pamelaHat.png",
    description: "Raffia fabric. Decorative bow.",
  },
  {
    type: "hat",
    gender: "women",
    name: "straw hat",
    color: "pink",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 25.99,
    imageURL: "/img/hat/strawHat.png",
    description:
      "Western-inspired hat in braided paper straw with an upturned brim.",
  },
];

let womensSocks = [
  {
    type: "socks",
    gender: "women",
    name: "wool socks 2 packs",
    color: "red and grey",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 5.99,
    imageURL: "/img/socks/woolSocks.jpeg",
    description: "Fine-knit socks in a soft, warm wool blend with ribbed tops.",
  },
  {
    type: "socks",
    gender: "women",
    name: "ankle socks",
    color: "multi",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 10.99,
    imageURL: "/img/socks/ankleSocks.jpeg",
    description: "Fine-knit ankle socks in a soft cotton blend.",
  },
  {
    type: "socks",
    gender: "women",
    name: "fishnet tights",
    color: "black",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 5.99,
    imageURL: "/img/socks/fishnetTightsSocks.jpeg",
    description:
      "Rhinestone-embellished fishnet tights with a regular waist and elasticized waistband.",
  },
  {
    type: "socks",
    gender: "women",
    name: "sports socks",
    color: "orange",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 2.99,
    imageURL: "/img/socks/sportSocks.jpeg",
    description:
      "Sports socks in DryMove™ functional fabric to wick away moisture from skin and keep you comfortably dry while moving. High leg section with ribbing and reflective details.",
  },
  {
    type: "socks",
    gender: "women",
    name: "fuzzy socks 2 packs",
    color: "grey and white",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 8.99,
    imageURL: "/img/socks/fuzzySocks.jpeg",
    description: "Soft, fine-knit socks with elasticized tops.",
  },
];
let womensUnderwear = [
  {
    type: "underwear",
    gender: "women",
    name: "brazilian",
    color: "multiple",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 15.99,
    imageURL: "/img/underwear/brazilianUnderwear.jpeg",
    description:
      "Briefs in jersey with a low waist, high-cut back, and lined gusset.",
  },
  {
    type: "underwear",
    gender: "women",
    name: "thong",
    color: "lilac",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 5.99,
    imageURL: "/img/underwear/thongUnderwear.jpeg",
    description:
      "Thong brief in cotton jersey with a regular waist. Lined gusset",
  },
  {
    type: "underwear",
    gender: "women",
    name: "hipster",
    color: "beige",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 7.99,
    imageURL: "/img/underwear/hipsterUnderwear.jpeg",
    description:
      "Briefs in cotton-blend jersey with a regular waist, medium coverage at back, and lined gusset. Cotton content is organic.",
  },
  {
    type: "underwear",
    gender: "women",
    name: "shaping underwear",
    color: "black",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 25.99,
    imageURL: "/img/underwear/shapingUnderwear.jpeg",
    description:
      "Shaping bikers in microfiber with a light sculpting effect on tummy, thighs, and seat. High waist, lined gusset, and laser-cut edges around legs for seamless comfort and minimal visibility under clothes.",
  },
  {
    type: "underwear",
    gender: "women",
    name: "maternity underwear",
    color: "grey",
    option: [
      { size: "S", stock: 5 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
    ],
    price: 15.99,
    imageURL: "/img/underwear/maternityUnderwear.jpeg",
    description:
      "Hipster briefs in organic cotton jersey with lace trim at top, wide sides, and medium coverage at back. Lined gusset.",
  },
];

//-------------------------Users--------------------------//
let userList = [
  {
    firstName: "Howell",
    lastName: "Altenwerth",
    email: "Howell_Altenwerth94@yahoo.com",
    username: "Howell_Altenwerth19",
    password: "dezezugebuzawiv",
    shippingAddress: "3567 Vandervort Roads Chapel Hill OR 73525-8523",
    billingAddress: "3567 Vandervort Roads Chapel Hill OR 73525-8523",
    creditCard: 1091912919591108,
    phone: 19707903316,
  },
  {
    firstName: "Daphney",
    lastName: "Bednar",
    email: "Daphney_Bednar39@hotmail.com",
    username: "Daphney.Bednar",
    password: "pipepeluxijusoz",
    shippingAddress: "70455 Boehm Orchard Wilson IA 16762-7988",
    billingAddress: "70455 Boehm Orchard Wilson IA 16762-7988",
    creditCard: 5300928774079660,
    phone: 18308483238,
  },
  {
    firstName: "Breana",
    lastName: "Pouros",
    email: "Breana.Pouros38@yahoo.com",
    username: "Breana.Pouros71",
    password: "tudaxahucilupol",
    shippingAddress: "318 Augusta Wall Rancho Cucamonga TN 59084",
    billingAddress: "318 Augusta Wall Rancho Cucamonga TN 59084",
    creditCard: 6126705686865986,
    phone: 17287174888,
  },
  {
    firstName: "Rosalind",
    lastName: "Oberbrunner",
    email: "Rosalind.Oberbrunner@yahoo.com",
    username: "Rosalind_Oberbrunner14",
    password: "fituqutegakisum",
    shippingAddress: "042 Pete Loaf North Port AR 16937-0238",
    billingAddress: "042 Pete Loaf North Port AR 16937-0238",
    creditCard: 2412230806194861,
    phone: 19479118987,
  },
  {
    firstName: "Malcolm",
    lastName: "Braun",
    email: "Malcolm.Braun@gmail.com",
    username: "Malcolm.Braun",
    password: "datuhowesejupux",
    shippingAddress: "1481 Antonina Gateway Riverview KY 94360-3535",
    billingAddress: "1481 Antonina Gateway Riverview KY 94360-3535",
    creditCard: 4700230406942715,
    phone: 14767958468,
  },
  {
    firstName: "Jacinto",
    lastName: "Champlin",
    email: "Jacinto24@hotmail.com",
    username: "Jacinto72",
    password: "pexiyuyihavamox",
    shippingAddress: "1389 Vinnie Summit Santa Rosa VT 75847-7924",
    billingAddress: "1389 Vinnie Summit Santa Rosa VT 75847-7924",
    creditCard: 8921191716513859,
    phone: 17170204691,
  },
  {
    firstName: "Nyah",
    lastName: "Lakin",
    email: "Nyah23@gmail.com",
    username: "Nyah_Lakin",
    password: "lofizuyeyikerup",
    shippingAddress: "4604 Marie Parkway Palmdale NM 14716",
    billingAddress: "4604 Marie Parkway Palmdale NM 14716",
    creditCard: 765497338784545,
    phone: 14158656327,
  },
  {
    firstName: "Alfred",
    lastName: "Prohaska",
    email: "Alfred_Prohaska@yahoo.com",
    username: "Alfred75",
    password: "daromojinijemiv",
    shippingAddress: "547 Mona Ranch Austin MO 94675",
    billingAddress: "547 Mona Ranch Austin MO 94675",
    creditCard: 433396684457011,
    phone: 10874875469,
  },
  {
    firstName: "Charley",
    lastName: "Kulas",
    email: "Charley37@hotmail.com",
    username: "Charley54",
    password: "xadakavajizeqof",
    shippingAddress: "9547 Shanny Roads Spring Valley OR 03429-9180",
    billingAddress: "9547 Shanny Roads Spring Valley OR 03429-9180",
    creditCard: 3028772250274834,
    phone: 10323967825,
  },
  {
    firstName: "Hudson",
    lastName: "Legros",
    email: "Hudson67@gmail.com",
    username: "Hudson_Legros22",
    password: "jigedasakulowen",
    shippingAddress: "421 Swift Trace Waco DE 26930-7286",
    billingAddress: "421 Swift Trace Waco DE 26930-7286",
    creditCard: 8816599003432313,
    phone: 13263105256,
  },
  {
    firstName: "Ben",
    lastName: "Odisho",
    email: "benodisho@gmail.com",
    username: "ben123",
    password: "ben123",
    shippingAddress: "123 ben st",
    billingAddress: "123 ben st",
    creditCard: 8816599003432312,
    phone: 13263105259,
  },
];

const seed = async () => {
  console.log("STARTING DB SEED...");

  await db.sync({ force: true });

  //-------------create all womens items here-------------//
  womensBlouses = await Promise.all(
    womensBlouses.map((item) => Product.create(item))
  );
  womensPants = await Promise.all(
    womensPants.map((item) => Product.create(item))
  );
  womensJackets = await Promise.all(
    womensJackets.map((item) => Product.create(item))
  );
  womensDresses = await Promise.all(
    womensDresses.map((item) => Product.create(item))
  );
  womensHats = await Promise.all(
    womensHats.map((item) => Product.create(item))
  );
  womensSocks = await Promise.all(
    womensSocks.map((item) => Product.create(item))
  );
  womensUnderwear = await Promise.all(
    womensUnderwear.map((item) => Product.create(item))
  );

  //-------------create all mens items here-------------//
  mensJackets = await Promise.all(
    mensJackets.map((jacket) => Product.create(jacket))
  );
  mensSweaters = await Promise.all(
    mensSweaters.map((sweater) => Product.create(sweater))
  );
  mensUnderwear = await Promise.all(
    mensUnderwear.map((item) => Product.create(item))
  );
  mensSocks = await Promise.all(
    mensSocks.map((item) => Product.create(item))
  );
  mensHats = await Promise.all(
    mensHats.map((item) => Product.create(item))
  );
  mensPants = await Promise.all(
    mensPants.map((pant) => Product.create(pant))
  );
  mensShirts = await Promise.all(
    mensShirts.map((shirt) => Product.create(shirt))
  );

  //-------------create all users here-------------//
  const [
    HowellAltenwerth,
    DaphneyBednar,
    BreanaPouros,
    RosalindOberbrunner,
    MalcolmBraun,
    JacintoChamplin,
    NyahLakin,
    AlfredProhaska,
    CharleyKulas,
    HudsonLegros,
  ] = await Promise.all(
    userList.map((singleUser) => User.create(singleUser))
  );

  //-------------create all cart items here-------------//
  let cartList = [
    {total:0,userId:HowellAltenwerth.id},
    {total:0,userId:DaphneyBednar.id},
    {total:0,userId:BreanaPouros.id},
    {total:0,userId:RosalindOberbrunner.id},
    {total:0,userId:MalcolmBraun.id},
    {total:0,userId:JacintoChamplin.id},
    {total:0,userId:NyahLakin.id},
    {total:0,userId:AlfredProhaska.id},
    {total:0,userId:CharleyKulas.id},
    {total:0,userId:HudsonLegros.id},
  ];

  cartList = await Promise.all(
    cartList.map((singleCart)=>Cart.create(singleCart))
  );

  console.log("DB SEED COMPLETE.");
};

seed();