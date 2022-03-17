CREATE TABLE orders(
id serial PRIMARY KEY,
status varchar(20),
user_id integer REFERENCES users(id)
);
