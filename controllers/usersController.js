const CONN = require('../helpers/dbConnection');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

function checkLogin(email, password){
    return new Promise((resolve, reject) => {
        const selectQuery = 'SELECT * FROM users WHERE email = ?';
        CONN.query(selectQuery, [email], (err, users) => {
            if(users.length === 0){
                resolve(null)
            }else{
                bcrypt.compare(password,users[0].password, (err, match) => {
                    resolve(match ? users[0] : null);
                });
            };
        });
    });
};

function register(email, password, name){
    return new Promise(async (resolve, reject) => {
        let hash = await bcrypt.hash(password, SALT_ROUNDS);
        const insertQuery = 'INSERT INTO users SET ?';
        let user = {
            password: hash,
            email,
            name,
        }

        CONN.query(insertQuery, [user], (err, result) => {
            console.log(result);
            if(err){
                resolve(false)
            }else{
                resolve(true);
            };
        });
    });
};

module.exports = {
    checkLogin,
    register
}