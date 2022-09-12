var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.sales);
// router.get('/users', adminController.users);
// router.get('/products', adminController.products);
// router.get('/providers', adminController.providers);

module.exports = router;