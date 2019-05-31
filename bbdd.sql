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
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(4) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` tinytext NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;