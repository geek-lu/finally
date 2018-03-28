//app is the start of this project
//require modules about this project
const http = require( 'http' )
const app = require( 'express' )()
const path = require( 'path' )
const cookieParser = require( 'cookie-parser' );
const bodyParser = require( 'body-parser' );
const session=require( 'express-session' );
const cors = require('cors')

//set router
var user = require('./routes/user')
var cart = require('./routes/cart')
var news = require('./routes/news')
var product = require('./routes/product')
//listen the 8080 point
http.createServer(app).listen(8080)

//middleware
app.use(cors({
    origin:'*',//access-control-allow-origin
    credentials:"true",//
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
     extended: false //use third module ?
}));
app.use(cookieParser());


app.use("/user",user)
app.use("/cart",cart)
app.use("/news",news)
app.use("/product",product)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
module.exports = app;