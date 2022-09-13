var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const logDBMiddleWare = require('../middlewares/logDB')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', usersController.index);
router.get('/profile', usersController.profile);
router.get('/address', usersController.address);

module.exports = router;
