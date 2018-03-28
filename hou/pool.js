// create the pool for mysql   :)
const mysql = require( 'mysql' )
let pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: "",
    port: 3306,
    database: 'mfresh',
    connectionLimit:15
})
module.exports = pool

