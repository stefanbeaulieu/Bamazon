SELECT * FROM bamazon_db.products;


insert INTO products(
	`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`
) VALUES
(003, 'Mens Tank', 'Mens Clothing', 19.00, 10),
(004, 'Football', 'Sporting Goods', 28.00, 8),
(005, 'Crossbow', 'Hunting', 250.00, 4),
(006, 'Arrows', 'Hunting', 35.00, 35);

insert INTO products(
	`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`
) VALUES (
	007, 'Weightlifting Gloves', 'Sporting Goods', 22.00, 7
);

insert INTO products(
	`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`
) VALUES (
	008, 'Basketball', 'Sporting Goods', 32.00, 8
);

insert INTO products(
	`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`
) VALUES (
	009, 'Basketball Hoop', 'Sporting Goods', 125.00, 2
);

insert INTO products(
	`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`
) VALUES (
	010, 'Puma Running V8', 'Mens Shoes', 65.00, 4
);