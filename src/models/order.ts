import client from "../database";


export type order={
    id?:number;
    status:string;
    user_id:number;
}

export type order_products={
    id?:number;
    quantity:number;
    order_id:number;
    product_id:number;
}


export class orderStore{
    async index():Promise<order[]>{
        try {
         const conn=await client.connect();
         const sql='SELECT * FROM orders';
         const result=await conn.query(sql)
         conn.release()
         return result.rows
        } catch (error) {
          throw new Error(`can not get orders. ${error}`)
        }
       }


       async show(id:number):Promise<order>{
        try {
          const conn=await client.connect();
          const sql='SELECT * FROM orders where id=($1)';
          const result=await conn.query(sql,[id])
          conn.release()
          return result.rows[0]   
        } catch (error) {
          throw new Error(`can not get the order. ${error}`)
          
        }
      }

      async create(o:order):Promise<order>{
        try {
          const conn=await client.connect();
          const sql='INSERT INTO orders(status,user_id) values ($1,$2) RETURNING *';
          const result=await conn.query(sql,[o.status,o.user_id])
          conn.release()
          return result.rows[0]
        } catch (error) {
          throw new Error(`Could not add new order. Error: ${error}`)
        }
      }



      async addProduct(quantity: number, orderId: string, productId: string): Promise<order_products> {
        try {
          const sql = 'SELECT * FROM orders WHERE id=($1)'
          const conn = await client.connect()
          const result = await conn.query(sql, [orderId])
          const order = result.rows[0]
          if (order.status !== "active") {
            throw new Error(`Could not add product ${productId} to order ${orderId} because order status is ${order.status}`)
          }
          conn.release()
        } catch (err) {
          throw new Error(`${err}`)
        }
    
        try {
          const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *'
          const conn = await client.connect()
          const result = await conn.query(sql, [quantity, orderId, productId])
          const order = result.rows[0]
          conn.release()
          return order
        } catch (err) {
          throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`)
        }
      }
    
      async current_order(user_id:number):Promise<order>{
        try {
          const conn=await client.connect();
          const sql='SELECT * FROM orders WHERE user_id=($1) ORDER BY id DESC LIMIT 1';
          const result=await conn.query(sql,[user_id])
          conn.release()
          return result.rows[0]
          
        } catch (error) {
          throw new Error(`can not get the order. ${error}`)
          
        }
      }
      
}