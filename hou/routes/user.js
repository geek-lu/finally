//this router about user
const pool=require( '../pool' )
var express = require('express')
var router = express.Router()
var user = require('../controllers/user.controller')


//所有子路由都是相对于/users
router.route("/register").post(user.register)

router.route("/login").get(user.login)

router.route("/check_uname").get(user.checkUname)

router.route("/check_phone").get(user.checkPhone)

module.exports = router;
