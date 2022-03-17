import client from "../database";


export type product={
    id?:number;
    name:string;
    price:number;
    category?:string;
}


export class productStore{
    async index():Promise<product[]>{
        try {
         const conn=await client.connect();
         const sql='SELECT * FROM products';
         const result=await conn.query(sql)
         conn.release()
         return result.rows
        } catch (error) {
          throw new Error(`can not get products. ${error}`)
        }
       }


       async show(id:number):Promise<product>{
        try {
          const conn=await client.connect();
          const sql='SELECT * FROM products where id=($1)';
          const result=await conn.query(sql,[id])
          conn.release()
          return result.rows[0]
          
        } catch (error) {
          throw new Error(`can not get the product. ${error}`)
          
        }
      }

      async create(p:product):Promise<product>{
        try {
          const conn=await client.connect();
          const sql='INSERT INTO products(name,price,category) values ($1,$2,$3) RETURNING *';
          const result=await conn.query(sql,[p.name,p.price,p.category])
          conn.release()
          return result.rows[0]
    
        } catch (error) {
          throw new Error(`Could not add new product ${p.name}. Error: ${error}`)
        }
      }


}