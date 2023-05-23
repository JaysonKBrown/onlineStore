DROP DATABASE IF EXISTS `onlineStoreDB`;
CREATE DATABASE `onlineStoreDB`;
USE `onlineStoreDB`;

CREATE TABLE product ( 
    product_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    name VARCHAR(60), 
    description TINYTEXT, 
    image TINYTEXT, 
    price DECIMAL(4,2),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_product PRIMARY KEY(product_id)
); 

ALTER TABLE `product` 
    MODIFY COLUMN `image` TEXT;
