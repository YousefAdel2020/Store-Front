# Store-front API
it is API for E-commerce store

---

## Prerequisites

* first your need to be sure that you install these on your machine

* **`Node.js`**
* **`postgres`**
* **`Git`**

## ports

* application server is running on port **`3000`**
* database server is running on port **`5432`**

## Env Attributes

* **`DATABASE_HOST`**
* **`DATABASE_USER`** 
* **`DATABASE_NAME`** 
* **`DATABASE_PASSWORD`**
* **`DATABASE_TEST`**
* **`ENV`**
* **`SALT_ROUND`**
* **`PEPPER`**
* **`TOKEN_SECRET`**

## Installation

* git clone https://github.com/YousefAdel2020/Store-Front.git
* open the the folder
* open the terminal
* write **`npm i`** in terminal to install all dependancies
* create .env file and put the enviroment variables in it
#### For database creation
* open terminal
* write down in the terminal 'psql -U (username)' and then enter the password
* write 'CREATE DATABASE front_store;' to create the development database
* write 'CREATE DATABASE front_store_test;' to create the testing database


## Available Scripts

### `npm run start`

* to the application on port **`3000`** in development mode

### `npm run watch`

* starts a TypeScript compiler, similar to nodemon but for TypeScript.

### `npm run test`

* runs the unit test using Jasmine and remove all tables after testing

### `npm run build`

* use to compile TypeScript to JavaScript and put it in **`dist`** folder 
