//this router about product
const pool=require( '../pool' )

var express = require('express')
var router = express.Router()
var product = require('../controllers/product.controller')

//所有子路由都是关于product
router.route("/product_select").get(product.productSelect)

router.route("/product_detail").get(product.productDetail)

module.exports = router 