var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cart', mainController.cart);
router.get('/login', mainController.login);
router.get('/forgot-password', mainController.forgotpassword);
router.get('/signup', mainController.signup);
router.get('/order-successful', mainController.ordersuccessful);
router.get('/order-unsuccessful', mainController.orderunsuccessful);

module.exports = router;
