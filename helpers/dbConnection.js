const MYSQL = require('mysql2');
const CONN = MYSQL.createConnection({
    host: 'localhost',
    user: 'travelAdmin',
    password: 'travel1234',
    database: 'travel'
})

module.exports = CONN;