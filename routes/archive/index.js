var express = require('express');
var router = express.Router();

router.use('/archive', require('./archive'));
router.use('/add', require('./add'));
router.use('/article', require('../article/index'));

module.exports = router;