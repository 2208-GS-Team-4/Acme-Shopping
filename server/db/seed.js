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
    price: 249.99,
    stock: 10,
    type: "Jacket",
    gender: "Men",
  },
  {
    name: "Puffer Bomber Jacket",
    imageURL: "/img/jacket/mensJacket2.jpg",
    description:
      "Warm-up your looks with this effortless puffer bomber jacket. Pair with jeans or chinos for the perfect everyday look",
    color: "Gray",
    price: 249.99,
    stock: 10,
    type: "Jacket",
    gender: "Men",
  },
  {
    name: " Wool-Blend Hooded Topcoat",
    imageURL: "/img/jacket/mensJacket3.jpg",
    description:
      "With a twist on the classic, this wool-blend topcoat features a drawstring hood and a covered zip closure. Pair with jeans and boots for a casual look",
    color: "Brown",
    price: 249.99,
    stock: 10,
    type: "Jacket",
    gender: "Men",
  },
  {
    name: "Wool-Blend Trucker Jacket",
    imageURL: "/img/jacket/mensJacket4.jpg",
    description:
      "The perfect classic trucker jacket in a navy wool-blend fabric. Add this to any outfit to keep cozy on cool days and chilly nights",
    color: "Blue",
    price: 199.99,
    stock: 10,
    type: "Jacket",
    gender: "Men",
  },
  {
    name: "Wool-Blend Water Resistant Topcoat",
    imageURL: "/img/jacket/mensJacket5.jpg",
    description:
      "A topcoat is a staple in every sharp-dressed man's wardrobe. Pair this wool-blend coat with denim for a polished look or with suiting for all of your formal events this season",
    color: "Black",
    price: 299.99,
    stock: 10,
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
    price: 99.99,
    stock: 10,
    type: "Sweater",
    gender: "Men",
  },
  {
    name: "Waffle Knit Shawl Collar Cardigan",
    imageURL: "/img/sweater/mensSweater2.jpg",
    description:
      "A classic layering choice to keep you warm this season. This waffle knit cardigan looks great over tees, button-ups and more - we love a versatile piece",
    color: "Black",
    price: 99.99,
    stock: 10,
    type: "Sweater",
    gender: "Men",
  },
  {
    name: "Vine Cable Knit CrewNeck Sweater",
    imageURL: "/img/sweater/mensSweater3.jpg",
    description:
      "A winter classic with a unique cable knit pattern, this crewneck sweater brings a fun twist to a cold weather essential. Complete the look with jeans or chinos for a sleek look",
    color: "Blue",
    price: 99.99,
    stock: 10,
    type: "Sweater",
    gender: "Men",
  },
  {
    name: "Solid Mock Neck Quarter Zip Sweater",
    imageURL: "/img/sweater/mensSweater4.jpg",
    description:
      "A cozy, ribbed sweater featuring a mock neck and quarter-zip front that's perfect for cool days and chilly nights. Pair with jeans, joggers or chinos for a polished casual look",
    color: "Brown",
    price: 119.99,
    stock: 10,
    type: "Sweater",
    gender: "Men",
  },
  {
    name: "V-Neck Popover Sweater",
    imageURL: "/img/sweater/mensSweater5.jpg",
    description:
      "An everyday staple for cold weather months, this v-neck sweater is a versatile choice and pairs well any of your favorite bottoms",
    color: "Gray",
    price: 99.99,
    stock: 10,
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
    price: 99.99,
    stock: 10,
    type: "Pants",
    gender: "Men",
  },
  {
    name: "Slim Dark Wash Selvedge Jeans",
    imageURL: "/img/pants/mensPants2.jpg",
    description:
      "Woven on a vintage shuttle loom which provides a highly desirable irregular yarn character indicative of prized premium denim. This guarantees that no two jeans are identical. Every jean is unique",
    color: "Dark Blue",
    price: 149.99,
    stock: 10,
    type: "Pants",
    gender: "Men",
  },
  {
    name: "Slim Hyper Stretch Jeans",
    imageURL: "/img/pants/mensPants3.jpg",
    description:
      "Our hyper stretch jeans are constructed with the maximum amount of stretch for all day comfort. Featuring a slim fit in a trendy color that provides a versatile look that pairs with any outfit",
    color: "Brown",
    price: 99.99,
    stock: 10,
    type: "Pants",
    gender: "Men",
  },
  {
    name: "Slim Straight Medium Wash Hyper Stretch Jeans",
    imageURL: "/img/pants/mensPants4.jpg",
    description:
      "These slim straight jeans feature our highest level of stretch for all-day comfort. Made in a versatile medium wash that's perfect for work or play",
    color: "Blue",
    price: 99.99,
    stock: 10,
    type: "Pants",
    gender: "Men",
  },
  {
    name: "Slim Straight Warm Stone Hyper Stretch Jeans",
    imageURL: "/img/pants/mensPants5.jpg",
    description:
      "This slim straight jean is made with our highest level of stretch to keep you comfortable no matter where the day takes you. Featured in a stylish warm stone wash to bring new life to your wardrobe",
    color: "Light Brown",
    price: 99.99,
    stock: 10,
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
    price: 79.99,
    stock: 10,
    type: "Shirt",
    gender: "Men",
  },
  {
    name: "Floral Stretch Corduroy Shirt",
    imageURL: "/img/shirts/mensShirt2.jpg",
    description:
      "A soft, stretchy corduroy in a floral print for the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling as we head into fall",
    color: "Blue",
    price: 79.99,
    stock: 10,
    type: "Shirt",
    gender: "Men",
  },
  {
    name: "Floral Stretch Corduroy Shirt",
    imageURL: "/img/shirts/mensShirt3.jpg",
    description:
      "A soft, stretchy corduroy in a floral print for the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling",
    color: "Black/Grey",
    price: 79.99,
    stock: 10,
    type: "Shirt",
    gender: "Men",
  },
  {
    name: "Solid Corduroy Shirt",
    imageURL: "/img/shirts/mensShirt4.jpg",
    description:
      "A corduroy shirt is the perfect blend of cozy and polished. Pair with chinos or jeans for effortless styling",
    color: "Gray",
    price: 79.99,
    stock: 10,
    type: "Shirt",
    gender: "Men",
  },
  {
    name: "Slim plaid Stretch Flannel Shirt",
    imageURL: "/img/shirts/mensShirt4.jpg",
    description:
      "An dressier, ultra-soft flannel infused with stretch and featured in a classic plaid for versatile style. Pair with dark denim for an everyday look",
    color: "Dark Brown",
    price: 79.99,
    stock: 10,
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
    price: 20.00,
    stock: 10,
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxers 3-Pack",
    imageURL: "/img/underwear/mensUnderwear2.jpg",
    description:
      "Pack includes 3 pairs of boxer shorts, each in a different color, print or pattern. Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "Assorted",
    price: 29.99,
    stock: 10,
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxer Brief 5-Pack",
    imageURL: "/img/underwear/mensUnderwear3.jpg",
    description:
      "Pack includes 5 pairs of boxer brief underwear, each in a different print, pattern or color. Elastic comfort waistband. Fly front. Soft-washed cotton jersey for the ultimate soft underwear. We put it through the wringer so you don't have to.n Engineered with innovative Built-In Flex stretch technology. Equal parts comfort & movement. Flexin' on 'em.",
    color: "Assorted",
    price: 20.00,
    stock: 10,
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxer Brief 10-Pack",
    imageURL: "/img/underwear/mensUnderwear4.jpg",
    description:
      "Pack includes 10 pairs of boxer brief underwear, each in a different print, pattern or color. Elastic comfort waistband. Fly front. Soft-washed cotton jersey for the ultimate soft underwear. We put it through the wringer so you don't have to.n Engineered with innovative Built-In Flex stretch technology. Equal parts comfort & movement. Flexin' on 'em.",
    color: "Assorted",
    price: 59.99,
    stock: 10,
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxer Single",
    imageURL: "/img/underwear/mensUnderwear5.jpg",
    description:
      "Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "Red plaid",
    price: 6.99,
    stock: 10,
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxer Single",
    imageURL: "/img/underwear/mensUnderwear6.jpg",
    description:
      "Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "Blue plaid",
    price: 6.99,
    stock: 10,
    type: "Underwear",
    gender: "Men",
  },
  {
    name: "Men's Boxer Single",
    imageURL: "/img/underwear/mensUnderwear7.jpg",
    description:
      "Elasticized waistband. Fly front. Soft-washed 100% cotton poplin for the ultimate soft underwear. We put it through the wringer so you don't have to.",
    color: "Red Buffalo plaid",
    price: 6.99,
    stock: 10,
    type: "Underwear",
    gender: "Men",
  },
  //~~~~~Mens socks items~~~~~//
  {
    name: "Men’s Ankle Socks 3-Pack",
    imageURL: "/img/socks/mensSocks1.jpg",
    description:
      "Pack includes 3 pairs of Go-Dry running socks. Rib-knit ankle-length openings. Embroidered Old Navy Active logo. Mesh top for breathability. Cushioned throughout; seamless toe. Superior Go-Dry wicking keeps you dry & comfortable. Soft cotton blend with added stretch.",
    color: "Black",
    price: 13.99,
    stock: 10,
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Men’s Ankle Socks 3-Pack",
    imageURL: "/img/socks/mensSocks2.jpg",
    description:
      "Pack includes 3 pairs of Go-Dry running socks. Rib-knit ankle-length openings. Embroidered Old Navy Active logo. Mesh top for breathability. Cushioned throughout; seamless toe. Superior Go-Dry wicking keeps you dry & comfortable. Soft cotton blend with added stretch.",
    color: "White",
    price: 13.99,
    stock: 10,
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Men’s Classic Socks 3-Pack",
    imageURL: "/img/socks/mensSocks3.jpg",
    description:
      "Pack includes 3 pairs of training socks. Breathable mesh top lets you vent. Go-Dry moisture-wicking technology keeps you dry & comfortable. Cushioned heel and toe for added comfort. Soft, microfiber knit, with comfortable stretch. Old Navy Active logo graphic at ribbed openings.",
    color: "Black",
    price: 15.99,
    stock: 10,
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Men’s Classic Socks 3-Pack",
    imageURL: "/img/socks/mensSocks4.jpg",
    description:
      "Pack includes 3 pairs of training socks. Breathable mesh top lets you vent. Go-Dry moisture-wicking technology keeps you dry & comfortable. Cushioned heel and toe for added comfort. Soft, microfiber knit, with comfortable stretch. Old Navy Active logo graphic at ribbed openings.",
    color: "Assored",
    price: 15.99,
    stock: 10,
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Men’s Classic Tube Sock Single Pair",
    imageURL: "/img/socks/mensSocks5.jpg",
    description:
      "Rib-knit cuffs and tube-style openings with multi-color stripes. Soft-knit fabric. with comfortable stretch. Notched seams at toe and heel for added comfort.",
    color: "Grey",
    price: 7.99,
    stock: 10,
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Pop culture Gender neutral socks 3 pack",
    imageURL: "/img/socks/mensSocks6.jpg",
    description:
      "Pack includes 3 pairs of graphic socks, featuring your favorite licensed pop-culture characters. These licensed graphic socks are totally classic & gender neutral, too. Wearable & shareable for you, for him, for her, for them! Contrasting rib-knit openings and notched toes. Soft-knit fabric, with comfortable stretch.",
    color: "Assored",
    price: 19.99,
    stock: 10,
    type: "Socks",
    gender: "Men",
  },
  {
    name: "Pop culture Gender neutral socks 3 pack",
    imageURL: "/img/socks/mensSocks7.jpg",
    description:
      "Pack includes 3 pairs of graphic socks, featuring your favorite licensed pop-culture characters. These licensed graphic socks are totally classic & gender neutral, too. Wearable & shareable for you, for him, for her, for them! Contrasting rib-knit openings and notched toes. Soft-knit fabric, with comfortable stretch.",
    color: "Assored",
    price: 19.99,
    stock: 10,
    type: "Socks",
    gender: "Men",
  },
  //~~~~~Mens hat items~~~~~//
  {
    name: "Reversible Twill Bucket Hat",
    imageURL: "/img/hat/mensHat1.1.jpg",
    description:
      "This hat is totally classic and gender-neutral, too. Wearable & shareable for you, for him, for her, for them! 100% Cotton.",
    color: "Navy blue/Blue tropical",
    price: 9.97,
    stock: 10,
    type: "Hats",
    gender: "Men",
  },
  {
    name: "Classic Baseball Brim",
    imageURL: "/img/hat/mensHat2.jpg",
    description:
      "This baseball cap is totally classic & gender neutral, too. Wearable & shareable for you, for him, for her, for them.",
    color: "Off-white/Ammonite",
    price: 6.99,
    stock: 10,
    type: "Hats",
    gender: "Men",
  },
  {
    name: "Red Knit Beanie",
    imageURL: "/img/hat/mensHat3.3.jpg",
    description:
      "This beanie hat is totally cozy & gender-neutral, too. Wearable & shareable for you, for him, for her, for them.",
    color: "Assorted",
    price: 9.97,
    stock: 10,
    type: "Hats",
    gender: "Men",
  },

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  //~~~~~~~~~Womens items~~~~~~~~~//
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


];

const userList = [
  {
    firstName: 'Howell',
    lastName: 'Altenwerth',
    email: 'Howell_Altenwerth94@yahoo.com',
    username: 'Howell_Altenwerth19',
    password: 'dezezugebuzawiv',
    shippingAddress: '3567 Vandervort Roads Chapel Hill OR 73525-8523',
    billingAddress: '3567 Vandervort Roads Chapel Hill OR 73525-8523',
    creditCard: 1091912919591108,
    phone: 19707903316
  }
  ,
  {
    firstName: 'Daphney',
    lastName: 'Bednar',
    email: 'Daphney_Bednar39@hotmail.com',
    username: 'Daphney.Bednar',
    password: 'pipepeluxijusoz',
    shippingAddress: '70455 Boehm Orchard Wilson IA 16762-7988',
    billingAddress: '70455 Boehm Orchard Wilson IA 16762-7988',
    creditCard: 5300928774079660,
    phone: 18308483238
  }
  ,
  {
    firstName: 'Breana',
    lastName: 'Pouros',
    email: 'Breana.Pouros38@yahoo.com',
    username: 'Breana.Pouros71',
    password: 'tudaxahucilupol',
    shippingAddress: '318 Augusta Wall Rancho Cucamonga TN 59084',
    billingAddress: '318 Augusta Wall Rancho Cucamonga TN 59084',
    creditCard: 6126705686865986,
    phone: 17287174888
  }
  ,
  {
    firstName: 'Rosalind',
    lastName: 'Oberbrunner',
    email: 'Rosalind.Oberbrunner@yahoo.com',
    username: 'Rosalind_Oberbrunner14',
    password: 'fituqutegakisum',
    shippingAddress: '042 Pete Loaf North Port AR 16937-0238',
    billingAddress: '042 Pete Loaf North Port AR 16937-0238',
    creditCard: 2412230806194861,
    phone: 19479118987
  }
  ,
  {
    firstName: 'Malcolm',
    lastName: 'Braun',
    email: 'Malcolm.Braun@gmail.com',
    username: 'Malcolm.Braun',
    password: 'datuhowesejupux',
    shippingAddress: '1481 Antonina Gateway Riverview KY 94360-3535',
    billingAddress: '1481 Antonina Gateway Riverview KY 94360-3535',
    creditCard: 4700230406942715,
    phone: 14767958468
  }
  ,
  {
    firstName: 'Jacinto',
    lastName: 'Champlin',
    email: 'Jacinto24@hotmail.com',
    username: 'Jacinto72',
    password: 'pexiyuyihavamox',
    shippingAddress: '1389 Vinnie Summit Santa Rosa VT 75847-7924',
    billingAddress: '1389 Vinnie Summit Santa Rosa VT 75847-7924',
    creditCard: 8921191716513859,
    phone: 17170204691
  }
  ,
  {
    firstName: 'Nyah',
    lastName: 'Lakin',
    email: 'Nyah23@gmail.com',
    username: 'Nyah_Lakin',
    password: 'lofizuyeyikerup',
    shippingAddress: '4604 Marie Parkway Palmdale NM 14716',
    billingAddress: '4604 Marie Parkway Palmdale NM 14716',
    creditCard: 765497338784545,
    phone: 14158656327
  }
  ,
  {
    firstName: 'Alfred',
    lastName: 'Prohaska',
    email: 'Alfred_Prohaska@yahoo.com',
    username: 'Alfred75',
    password: 'daromojinijemiv',
    shippingAddress: '547 Mona Ranch Austin MO 94675',
    billingAddress: '547 Mona Ranch Austin MO 94675',
    creditCard: 433396684457011,
    phone: 10874875469
  }
  ,
  {
    firstName: 'Charley',
    lastName: 'Kulas',
    email: 'Charley37@hotmail.com',
    username: 'Charley54',
    password: 'xadakavajizeqof',
    shippingAddress: '9547 Shanny Roads Spring Valley OR 03429-9180',
    billingAddress: '9547 Shanny Roads Spring Valley OR 03429-9180',
    creditCard: 3028772250274834,
    phone: 10323967825
  }
  ,
  {
    firstName: 'Hudson',
    lastName: 'Legros',
    email: 'Hudson67@gmail.com',
    username: 'Hudson_Legros22',
    password: 'jigedasakulowen',
    shippingAddress: '421 Swift Trace Waco DE 26930-7286',
    billingAddress: '421 Swift Trace Waco DE 26930-7286',
    creditCard: 8816599003432313,
    phone: 13263105256
  }
  ,
  {
    firstName: 'Sonny',
    lastName: 'Nienow',
    email: 'Sonny84@hotmail.com',
    username: 'Sonny83',
    password: 'sutifutuviximey',
    shippingAddress: '47589 Jacobi Prairie Bismarck MT 64461',
    billingAddress: '47589 Jacobi Prairie Bismarck MT 64461',
    creditCard: 9973478537251350,
    phone: 16663560212
  }
  ,
  {
    firstName: 'Hettie',
    lastName: 'Krajcik',
    email: 'Hettie.Krajcik74@hotmail.com',
    username: 'Hettie.Krajcik',
    password: 'xaqedafohuqikoy',
    shippingAddress: '61163 Okuneva Wells Jackson LA 62438-4801',
    billingAddress: '61163 Okuneva Wells Jackson LA 62438-4801',
    creditCard: 8949926322834669,
    phone: 12698558603
  }
  ,
  {
    firstName: 'Sheldon',
    lastName: 'Gleichner',
    email: 'Sheldon_Gleichner5@yahoo.com',
    username: 'Sheldon66',
    password: 'tukigeviqefadom',
    shippingAddress: '1271 Moen Highway Rochester Hills CO 48402',
    billingAddress: '1271 Moen Highway Rochester Hills CO 48402',
    creditCard: 9702617325356492,
    phone: 16684981133
  }
  ,
  {
    firstName: 'Imelda',
    lastName: 'Conroy',
    email: 'Imelda.Conroy31@yahoo.com',
    username: 'Imelda.Conroy',
    password: 'ragahicemonibed',
    shippingAddress: '492 Buckridge Lodge Fremont VA 22630',
    billingAddress: '492 Buckridge Lodge Fremont VA 22630',
    creditCard: 5252753404380926,
    phone: 17277049763
  }
  ,
  {
    firstName: 'Jairo',
    lastName: 'Emmerich',
    email: 'Jairo.Emmerich87@hotmail.com',
    username: 'Jairo79',
    password: 'nadozigawakabom',
    shippingAddress: '605 Myrl Shoal Leesburg LA 95011',
    billingAddress: '605 Myrl Shoal Leesburg LA 95011',
    creditCard: 8544243570217394,
    phone: 17000983500
  }
  ,
  {
    firstName: 'Kiley',
    lastName: 'Hartmann',
    email: 'Kiley_Hartmann53@yahoo.com',
    username: 'Kiley_Hartmann81',
    password: 'lonoqutacixexaw',
    shippingAddress: '3037 Padberg Ramp Pharr MN 61192',
    billingAddress: '3037 Padberg Ramp Pharr MN 61192',
    creditCard: 5945070348872715,
    phone: 18228995660
  }
  ,
  {
    firstName: 'Angus',
    lastName: 'Rosenbaum',
    email: 'Angus96@gmail.com',
    username: 'Angus.Rosenbaum69',
    password: 'febutojaganasem',
    shippingAddress: '6092 Elisa Villages El Cajon IN 30992',
    billingAddress: '6092 Elisa Villages El Cajon IN 30992',
    creditCard: 6075193488894769,
    phone: 18556657822
  }
  ,
  {
    firstName: 'Emelia',
    lastName: 'Lehner',
    email: 'Emelia.Lehner@gmail.com',
    username: 'Emelia.Lehner31',
    password: 'lasabojanaqotor',
    shippingAddress: '76373 Brekke Track Vacaville MA 51635-4688',
    billingAddress: '76373 Brekke Track Vacaville MA 51635-4688',
    creditCard: 8681288712003412,
    phone: 17827368687
  }
  ,
  {
    firstName: 'Ryleigh',
    lastName: 'Weimann',
    email: 'Ryleigh_Weimann@gmail.com',
    username: 'Ryleigh_Weimann',
    password: 'pususodehudezec',
    shippingAddress: '3954 Murl Ferry Hicksville MT 29097-6170',
    billingAddress: '3954 Murl Ferry Hicksville MT 29097-6170',
    creditCard: 2992278681735951,
    phone: 16291295738
  }
  ,
  {
    firstName: 'Jazmin',
    lastName: 'Leffler',
    email: 'Jazmin_Leffler@hotmail.com',
    username: 'Jazmin.Leffler58',
    password: 'boyejucutezoqac',
    shippingAddress: '433 Lindgren Pines Manhattan MT 47151',
    billingAddress: '433 Lindgren Pines Manhattan MT 47151',
    creditCard: 6394704483029972,
    phone: 15883641471
  }
  ,
  {
    firstName: 'Sunny',
    lastName: 'Streich',
    email: 'Sunny26@gmail.com',
    username: 'Sunny54',
    password: 'voxuzetisoquqak',
    shippingAddress: '337 Ivory Bypass Lompoc NE 66032-4296',
    billingAddress: '337 Ivory Bypass Lompoc NE 66032-4296',
    creditCard: 1458277155350723,
    phone: 18613408111
  }
  ,
  {
    firstName: 'Eudora',
    lastName: 'Bayer',
    email: 'Eudora_Bayer@hotmail.com',
    username: 'Eudora_Bayer82',
    password: 'nevifuxufeqaxog',
    shippingAddress: '550 Stiedemann Valleys Antioch ID 37809',
    billingAddress: '550 Stiedemann Valleys Antioch ID 37809',
    creditCard: 3634788842527247,
    phone: 13244445844
  }
  ,
  {
    firstName: 'Rogelio',
    lastName: 'Raynor',
    email: 'Rogelio.Raynor@yahoo.com',
    username: 'Rogelio.Raynor98',
    password: 'dadihulibozetoj',
    shippingAddress: '134 Pagac Corner Rancho Cordova UT 14646',
    billingAddress: '134 Pagac Corner Rancho Cordova UT 14646',
    creditCard: 6885408817390277,
    phone: 17922005922
  }
  ,
  {
    firstName: 'Rylan',
    lastName: 'Olson',
    email: 'Rylan_Olson@hotmail.com',
    username: 'Rylan6',
    password: 'nidujubizeximep',
    shippingAddress: '1119 Krajcik Springs Malden PA 82784-5666',
    billingAddress: '1119 Krajcik Springs Malden PA 82784-5666',
    creditCard: 3913098541441399,
    phone: 16115939912
  }
  ,
  {
    firstName: 'Shawna',
    lastName: 'Bartoletti',
    email: 'Shawna_Bartoletti@yahoo.com',
    username: 'Shawna86',
    password: 'bajerihunesuwol',
    shippingAddress: '15931 Michale Spurs Palm Desert AR 20121',
    billingAddress: '15931 Michale Spurs Palm Desert AR 20121',
    creditCard: 760354935129926,
    phone: 10827775587
  }
  ,
  {
    firstName: 'Carlotta',
    lastName: 'Bednar',
    email: 'Carlotta_Bednar51@yahoo.com',
    username: 'Carlotta.Bednar84',
    password: 'gequvubosomiliq',
    shippingAddress: '710 Dooley Manors Syracuse AZ 14124-8087',
    billingAddress: '710 Dooley Manors Syracuse AZ 14124-8087',
    creditCard: 5406163071669664,
    phone: 14924956419
  }
  ,
  {
    firstName: 'Samara',
    lastName: 'Wilkinson',
    email: 'Samara_Wilkinson@gmail.com',
    username: 'Samara.Wilkinson',
    password: 'rijiruvijecudik',
    shippingAddress: '78821 Wolf Brook Cincinnati SD 88313-7390',
    billingAddress: '78821 Wolf Brook Cincinnati SD 88313-7390',
    creditCard: 2920454394845660,
    phone: 16759924663
  }
  ,
  {
    firstName: 'Kendall',
    lastName: 'Torp',
    email: 'Kendall63@yahoo.com',
    username: 'Kendall_Torp86',
    password: 'camalunupibumog',
    shippingAddress: '6119 Lue Extension Chino WA 68632',
    billingAddress: '6119 Lue Extension Chino WA 68632',
    creditCard: 9674180457536536,
    phone: 13885642646
  }
  ,
  {
    firstName: 'Dedrick',
    lastName: 'Cummings',
    email: 'Dedrick.Cummings80@yahoo.com',
    username: 'Dedrick_Cummings',
    password: 'pudutogejicakuy',
    shippingAddress: '1726 Lilyan Lane Greeley NY 99228-9259',
    billingAddress: '1726 Lilyan Lane Greeley NY 99228-9259',
    creditCard: 1349158878601960,
    phone: 18298546805
  }
  ,
  {
    firstName: 'Kaela',
    lastName: 'Connelly',
    email: 'Kaela.Connelly@yahoo.com',
    username: 'Kaela.Connelly44',
    password: 'gejimiforidihar',
    shippingAddress: '065 Runolfsdottir Fort Lake Havasu City OR 58084',
    billingAddress: '065 Runolfsdottir Fort Lake Havasu City OR 58084',
    creditCard: 8047409532736800,
    phone: 17625146273
  }
  ,
  {
    firstName: 'Franz',
    lastName: 'Boyer',
    email: 'Franz97@yahoo.com',
    username: 'Franz13',
    password: 'cekahokezarugay',
    shippingAddress: '13269 Pouros Burg Tampa HI 76090-2778',
    billingAddress: '13269 Pouros Burg Tampa HI 76090-2778',
    creditCard: 7802622562678411,
    phone: 19917155385
  }
  ,
  {
    firstName: 'Fanny',
    lastName: 'Swift',
    email: 'Fanny_Swift19@hotmail.com',
    username: 'Fanny.Swift58',
    password: 'qihugoyirezidin',
    shippingAddress: '956 Quitzon Stravenue Gainesville SD 79306-9209',
    billingAddress: '956 Quitzon Stravenue Gainesville SD 79306-9209',
    creditCard: 8101844567944070,
    phone: 17906709084
  }
  ,
  {
    firstName: 'Aiden',
    lastName: 'Powlowski',
    email: 'Aiden64@gmail.com',
    username: 'Aiden_Powlowski15',
    password: 'wikodajaruxalaf',
    shippingAddress: '288 Haley Summit St. Joseph AR 84107',
    billingAddress: '288 Haley Summit St. Joseph AR 84107',
    creditCard: 6492257333931671,
    phone: 11105664065
  }
  ,
  {
    firstName: 'Chaim',
    lastName: 'Stiedemann',
    email: 'Chaim_Stiedemann64@hotmail.com',
    username: 'Chaim_Stiedemann67',
    password: 'qiminequberihom',
    shippingAddress: '351 Breitenberg Radial Waukesha MT 07493',
    billingAddress: '351 Breitenberg Radial Waukesha MT 07493',
    creditCard: 3348801463200600,
    phone: 18810596739
  }
  ,
  {
    firstName: 'Wilfredo',
    lastName: 'Wuckert',
    email: 'Wilfredo_Wuckert61@yahoo.com',
    username: 'Wilfredo13',
    password: 'laducabuyijujex',
    shippingAddress: '1322 Harold Fork Jacksonville MD 42776',
    billingAddress: '1322 Harold Fork Jacksonville MD 42776',
    creditCard: 2012091560403122,
    phone: 10466586708
  }
  ,
  {
    firstName: 'Lavonne',
    lastName: 'Friesen',
    email: 'Lavonne_Friesen36@hotmail.com',
    username: 'Lavonne7',
    password: 'majemiyabopileg',
    shippingAddress: '4599 Rolfson Hollow Brownsville WV 40098-2302',
    billingAddress: '4599 Rolfson Hollow Brownsville WV 40098-2302',
    creditCard: 8819980543533763,
    phone: 15132548275
  }
  ,
  {
    firstName: 'Kaitlyn',
    lastName: 'Jenkins',
    email: 'Kaitlyn.Jenkins@hotmail.com',
    username: 'Kaitlyn61',
    password: 'fesuhonokoyokos',
    shippingAddress: '1591 Olga Crossroad Ogden NE 64729-6756',
    billingAddress: '1591 Olga Crossroad Ogden NE 64729-6756',
    creditCard: 1326515846176782,
    phone: 19721672943
  }
  ,
  {
    firstName: 'Trace',
    lastName: 'McGlynn',
    email: 'Trace_McGlynn@yahoo.com',
    username: 'Trace_McGlynn84',
    password: 'sirawepasibezox',
    shippingAddress: '719 Sean Meadow Somerville AZ 53040',
    billingAddress: '719 Sean Meadow Somerville AZ 53040',
    creditCard: 3969515953625824,
    phone: 13010630351
  }
  ,
  {
    firstName: 'Julius',
    lastName: 'Bechtelar',
    email: 'Julius_Bechtelar52@hotmail.com',
    username: 'Julius23',
    password: 'caveyobuzudiwew',
    shippingAddress: '26119 Hobart Throughway Moreno Valley IA 81683',
    billingAddress: '26119 Hobart Throughway Moreno Valley IA 81683',
    creditCard: 9336466093240884,
    phone: 18420608671
  }
  ,
  {
    firstName: 'Mariana',
    lastName: 'Considine',
    email: 'Mariana.Considine62@gmail.com',
    username: 'Mariana5',
    password: 'tibudenadejitud',
    shippingAddress: '45593 Xander Creek Wilmington NM 25489',
    billingAddress: '45593 Xander Creek Wilmington NM 25489',
    creditCard: 5301380744233457,
    phone: 16496069172
  }
  ,
  {
    firstName: 'Anais',
    lastName: 'Wyman',
    email: 'Anais.Wyman@hotmail.com',
    username: 'Anais_Wyman',
    password: 'poyinuzesolutot',
    shippingAddress: '0720 Herman Ridges Palm Coast NH 53534-9883',
    billingAddress: '0720 Herman Ridges Palm Coast NH 53534-9883',
    creditCard: 8513857299014797,
    phone: 14192632540
  }
  ,
  {
    firstName: 'Easter',
    lastName: 'Armstrong',
    email: 'Easter_Armstrong68@yahoo.com',
    username: 'Easter.Armstrong',
    password: 'hepiyixebavacox',
    shippingAddress: '102 Devin Branch New Haven NM 25344-2769',
    billingAddress: '102 Devin Branch New Haven NM 25344-2769',
    creditCard: 9966493534870340,
    phone: 12074479315
  }
  ,
  {
    firstName: 'Flossie',
    lastName: 'Rippin',
    email: 'Flossie.Rippin@yahoo.com',
    username: 'Flossie_Rippin79',
    password: 'xiciguluhuboxof',
    shippingAddress: '1503 Hauck Harbor Noblesville OK 00108-0227',
    billingAddress: '1503 Hauck Harbor Noblesville OK 00108-0227',
    creditCard: 430854148879211,
    phone: 18179498434
  }
  ,
  {
    firstName: 'Camille',
    lastName: 'Satterfield',
    email: 'Camille_Satterfield@yahoo.com',
    username: 'Camille64',
    password: 'xafebuvezeqopip',
    shippingAddress: '599 Kayla Cape Cincinnati FL 60772',
    billingAddress: '599 Kayla Cape Cincinnati FL 60772',
    creditCard: 6486352558065097,
    phone: 15674667322
  }
  ,
  {
    firstName: 'Jeramie',
    lastName: 'Rowe',
    email: 'Jeramie_Rowe@yahoo.com',
    username: 'Jeramie.Rowe',
    password: 'vawolopawicucat',
    shippingAddress: '60190 Waelchi Plaza Glendora RI 71984',
    billingAddress: '60190 Waelchi Plaza Glendora RI 71984',
    creditCard: 8397966410723207,
    phone: 16055856623
  }
  ,
  {
    firstName: 'Taryn',
    lastName: 'Ritchie',
    email: 'Taryn.Ritchie14@yahoo.com',
    username: 'Taryn.Ritchie',
    password: 'ramolizoyofehec',
    shippingAddress: '24337 Dereck Groves Perth Amboy SC 19488-9076',
    billingAddress: '24337 Dereck Groves Perth Amboy SC 19488-9076',
    creditCard: 8405733753150476,
    phone: 11573548182
  }
  ,
  {
    firstName: 'Kobe',
    lastName: 'Emard',
    email: 'Kobe_Emard@hotmail.com',
    username: 'Kobe41',
    password: 'lizufekotihabop',
    shippingAddress: '06794 Schuster Forks Lowell SC 32567-6496',
    billingAddress: '06794 Schuster Forks Lowell SC 32567-6496',
    creditCard: 64860295826208,
    phone: 11759330844
  }
  ,
  {
    firstName: 'Domenick',
    lastName: 'DuBuque',
    email: 'Domenick80@yahoo.com',
    username: 'Domenick_DuBuque',
    password: 'xaramucahejerub',
    shippingAddress: '460 Angelina Prairie Monterey Park NH 72800',
    billingAddress: '460 Angelina Prairie Monterey Park NH 72800',
    creditCard: 6233482871090840,
    phone: 16301398714
  }
  ,
  {
    firstName: 'Davin',
    lastName: 'VonRueden',
    email: 'Davin_VonRueden@hotmail.com',
    username: 'Davin_VonRueden77',
    password: 'cexahanuboriceq',
    shippingAddress: '32924 Walter Valley Altadena SD 16901-0346',
    billingAddress: '32924 Walter Valley Altadena SD 16901-0346',
    creditCard: 1939785353557950,
    phone: 16669462115
  }
  ,
  {
    firstName: 'Forrest',
    lastName: 'White',
    email: 'Forrest.White@gmail.com',
    username: 'Forrest28',
    password: 'kajafukavutakir',
    shippingAddress: '318 Armstrong Key Covina WY 69924',
    billingAddress: '318 Armstrong Key Covina WY 69924',
    creditCard: 8358127133519640,
    phone: 10786245073
  }
];

const seed = async () => {
  console.log('STARTING DB SEED...');
  
  await db.sync({ force: true });

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
    SonnyNienow,
    HettieKrajcik,
    SheldonGleichner,
    ImeldaConroy,
    JairoEmmerich,
    KileyHartmann,
    AngusRosenbaum,
    EmeliaLehner,
    RyleighWeimann,
    JazminLeffler,
    SunnyStreich,
    EudoraBayer,
    RogelioRaynor,
    RylanOlson,
    ShawnaBartoletti,
    CarlottaBednar,
    SamaraWilkinson,
    KendallTorp,
    DedrickCummings,
    KaelaConnelly,
    FranzBoyer,
    FannySwift,
    AidenPowlowski,
    ChaimStiedemann,
    WilfredoWuckert,
    LavonneFriesen,
    KaitlynJenkins,
    TraceMcGlynn,
    JuliusBechtelar,
    MarianaConsidine,
    AnaisWyman,
    EasterArmstrong,
    FlossieRippin,
    CamilleSatterfield,
    JeramieRowe,
    TarynRitchie,
    KobeEmard,
    DomenickDuBuque,
    DavinVonRueden,
    ForrestWhite
  ] = await Promise.all(userList.map((singleUser) => User.create(singleUser)));

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
    mensHats1,
    mensHats2,
    mensHats3,

    // Womens items start here in order

  ] = await Promise.all(productsList.map((singleProduct) => Product.create(singleProduct)));

  console.log('DB SEED COMPLETE.');
};

seed();