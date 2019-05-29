CREATE DATABASE travel;
use travel;
CREATE TABLE destinos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    destino VARCHAR(50),
    precio DECIMAL(6,2),
    descuento DECIMAL,
    ruta_imagen TEXT,
    fecha_inicio DATE,
    fecha_fin DATE
);
