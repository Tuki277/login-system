var express = require('express');
var router = express.Router();
const userController = require('../controllers/user')

/* GET home page. */
router.route('/')
    .get(userController.getLogin)
    .post(userController.postLogin)

router.route('/register')
    .get(userController.getRegister)
    .post(userController.postRegister)

module.exports = router;
