DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE  bamazon_db;

CREATE TABLE products (
item_id  INT NOT NULL auto_increment,
product_name VARCHAR(255),
department_name VARCHAR(555),
price FLOAT(4),
stock_quantity INT(2),

PRIMARY KEY(item_id)
);

SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("play_station3","electronics",100,20);