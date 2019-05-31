const CONN = require('../helpers/dbConnection');

//Controlador que devuelve una promesa
function getDestinos(){
    // Creamos una promesa y la devolvemos
    return new Promise((resolve, reject) => {
        // Hacemos la llamada a la bbdd
        CONN.query('SELECT * FROM destinos', (err, rows) => {
            // Cuando la bbdd nos devuelva los datos resolvemos la promesa
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