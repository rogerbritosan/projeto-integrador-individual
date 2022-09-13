var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.sales);
router.get('/users', adminController.users);
router.get('/categories', adminController.categories);
router.get('/products', adminController.products);
router.get('/products/:id', adminController.productdetails);
router.get('/products/create', adminController.productcreate);
router.post('/products', adminController.productssuccessful);
router.post('/products/edit/:id', adminController.productedit);
router.put('/products/', adminController.productupdate);
router.delete('/products/:id', adminController.productdelete);
router.get('/providers', adminController.providers);

module.exports = router;