import client from "../database";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();



const {SALT_ROUND,PEPPER}=process.env;

export type user={
    id?:number;
    first_name?:string;
    last_name?:string;
    username:string;
    password:string;
}

export class userInfo{

async index():Promise<user[]>{
    try {
        const conn=await client.connect();
        const sql="SELECT * FROM users";
        const result=await conn.query(sql)
        conn.release();
        const users=result.rows
        return users

    } catch (error) {
        throw new Error(`cannot get users: ${error}`)
    }
}


async show(id: number): Promise<user> {
    try {
      const conn = await client.connect()
      const sql = 'SELECT * FROM users WHERE id=($1)'
      const result = await conn.query(sql, [id])
      conn.release()
      const user=result.rows[0];
      return user;
    } catch (err) {
      throw new Error(`cannnot show user ${id}: ${err}`)
    }
  }

async create(u:user):Promise<user>{
    try {
        const conn=await client.connect();
        const sql="INSERT INTO users (first_name,last_name,username, password) values ($1,$2,$3,$4) RETURNING *";
        const hashed=bcrypt.hashSync(u.password+PEPPER,parseInt(SALT_ROUND as string));
        const result=await conn.query(sql,[u.first_name,u.last_name,u.username,hashed])
        conn.release();
        const user=result.rows[0];
        return user
    } catch (error) {
        throw new Error(`cannot create user ${u.username}: ${error}`);
    }
}



}