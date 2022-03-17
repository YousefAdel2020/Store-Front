# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

---

## API Endpoints

### user Endpoints

* ### **`/users`** METHOD GET (get list of all users) [TOKEN REQUIRED]
* ### **`/users/:id`** METHOD GET (get a specific user) [TOKEN REQUIRED]
* ### **`/users`** METHOD POST (create a new user)


### product Endpoints

* ### **`/products`** METHOD GET (get list of all products)
* ### **`/products/:id`** METHOD GET (get a specific product) 
* ### **`/products`** METHOD POST (create a new product) [TOKEN REQUIRED]

### order Endpoints

* ### **`/orders`** METHOD GET (get list of all orders)
* ### **`/orders/:id`** METHOD GET (get a specific order) 
* ### **`/orders`** METHOD POST (create a new order) [TOKEN REQUIRED]
* ### **`/orders/:id/products`** METHOD POST (add a new product in a specific order) [TOKEN REQUIRED]
* ### **`/orders/users/:id`** METHOD GET (show the current order by user) [TOKEN REQUIRED]

---

## Data Shapes

#### users
- id serial PRIMARY KEY
- first_name varchar(50)
- last_name varchar(50)
- username varchar(100)
- password varchar


#### products 
- id serial PRIMARY KEY
- name varchar(255) NOT NULL
- price integer NOT NULL
- category varchar(50)

#### orders
- id serial PRIMARY KEY
- status varchar(20)
- user_id REFERENCES users.id

#### order_products
- id serial PRIMARY KEY
- quantity integer
- order_id  REFERENCES orders.id
- product_id  REFERENCES products.id