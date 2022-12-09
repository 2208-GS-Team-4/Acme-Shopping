const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use("/men", require("./mensProducts"));
router.use("/women", require("./womensProducts"));
router.use("/users", require("./users"));

module.exports = router;