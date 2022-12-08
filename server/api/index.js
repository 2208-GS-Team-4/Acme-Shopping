const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use("/men", require("./mensProducts"));
router.use("/women", require("./womensProducts"));

module.exports = router;