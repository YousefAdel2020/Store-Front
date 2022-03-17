CREATE TABLE order_products(
id serial PRIMARY KEY,
quantity integer,
order_id integer REFERENCES orders(id),
product_id integer REFERENCES products(id)
);