const express = require('express');
const router = express.Router();

const travelsController = require('../../controllers/travelsController');


// El post para crear un destino por json
router.post('/', async (req, res) => {
    const destino = {
        destino: req.body.destino,
        precio: req.body.precio,
        descuento: req.body.descuento,
        ruta_imagen: req.body.ruta_imagen,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
    };

    let result = await travelsController.addFilm(destino);
    res.send(result);
});

module.exports = router;