const CONN = require('../helpers/dbConnection');

function getDestinos(){
    return new Promise((resolve, reject) => {
        CONN.query('SELECT * FROM destinos', (err, rows) => {
            resolve(rows);
        })
    })
}

function addDestino(destino){
    return new Promise((resolve, reject) => {
        CONN.query('INSERT INTO destinos SET ?', [destino], (err, result) => {
            CONN.query('SELECT * FROM destinos WHERE id = ?', [result.insertId], (selErr, destinos) => {
                resolve(destinos);
            });
        });
    });
};

module.exports = {
    getDestinos,
    addDestino
}