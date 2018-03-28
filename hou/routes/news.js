//this router about news
const pool=require( '../pool' )
var express = require('express')
var router = express.Router()
var news = require('../controllers/news.controller')

//所有子路由都是关于new
router.route("/news_select").get(news.newsSelect)

router.route("/news_detail/:nid").get(news.newsDetail)
module.exports = router;