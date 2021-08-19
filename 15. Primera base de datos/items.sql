SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `items` (
  `nombre` varchar(11) NOT NULL,
  `categoria` varchar(11) NOT NULL,
  `stock` int(10) UNSIGNED DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `items` (`nombre`, `categoria`, `stock`) VALUES
('Fideos', 'Harina', 20),
('Leche', 'Lacteos', 30),
('Crema', 'Lacteos', 15);

/* Listar los registros agregados */
SELECT * FROM items

/* Borrar el item con id = 1 */
DELETE FROM items WHERE id = 1

/* Actualizar el stock del item con id = 2 a 45 */
UPDATE items SET stock = 45 WHERE id = 2

/* Listar los registros comprobando que los datos estén actualizados según las acciones
realizadas */
SELECT * FROM items

ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;
