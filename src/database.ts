import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_TEST,
  ENV
} = process.env;


let client=new Pool({})
console.log(ENV)

if(ENV==='dev')
{
    client=new Pool({
        host:DATABASE_HOST,
        user:DATABASE_USER,
        database:DATABASE_NAME,
        password:DATABASE_PASSWORD
    }) 
}

if(ENV==='test')
{
    client=new Pool({
        host:DATABASE_HOST,
        user:DATABASE_USER,
        database:DATABASE_TEST,
        password:DATABASE_PASSWORD
    }) 
}

export default client;