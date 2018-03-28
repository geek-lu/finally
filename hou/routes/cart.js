//this router about cart
const pool=require( '../pool' )
var express = require('express')
var router = express.Router()
var cart = require('../controllers/cart.controller')


//所有子路由都是相对于/cart
router.route("/cart_detail_update").get(cart.cartDetailUpdate)
router.route("/cart_detail_select").get(cart.cartDetailSelect)
router.route("/cart_detail_delete").get(cart.cartDetailDelete)
router.route("/cart_detail_add").post(cart.cartDetailAdd)
module.exports = router;
