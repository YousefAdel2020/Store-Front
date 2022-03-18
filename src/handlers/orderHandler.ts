import express, { Request, Response } from 'express'
import {  orderStore } from '../models/order'
import {verifyAuthToken} from '../middleware/auth'



const store=new orderStore();


const index=async(_req: Request, res: Response)=>{
    try {
        const orders=await store.index();
         res.status(200).json(orders);
    } catch (error) {
        res.json(error)
    }
    
}


const show=async(req: Request, res: Response)=>{
    try {
        const order=await store.show(parseInt(req.params.id));
        res.status(200).json(order);
    } catch (error) {
        res.json(error)
    }
  
}

const create=async(req: Request, res: Response)=>{
    try {
        const {status,user_id}=req.body
        const order=await store.create({
            status:status,
            user_id:user_id})
        res.status(201).json(order)
    }catch (error) {
        res.json(error)
    }
}



const addProduct = async (_req: Request, res: Response) => {
    const orderId: string = _req.params.id
    const productId: string = _req.body.productId
    const quantity: number = parseInt(_req.body.quantity)
  
    try {
      const addedProduct = await store.addProduct(quantity, orderId, productId)
      res.status(201).json(addedProduct)
    } catch(err) {
      res.status(400)
      res.json(err)
    }
  }

const current_order=async(req:Request,res:Response)=>{
    const user_id: number = parseInt(req.params.id)
    try {
        const cur=await store.current_order(user_id);
        res.status(200).json(cur);
    } catch (error) {
        res.status(400)
        res.json(error)
    }
}


const orderRoutes = (app: express.Application) => {
    app.get('/orders', verifyAuthToken,index)
    app.get('/orders/:id',verifyAuthToken, show)
    app.post('/orders',verifyAuthToken, create)
    app.post('/orders/:id/products', verifyAuthToken,addProduct)
    app.get('/orders/users/:id',verifyAuthToken,current_order)
}

export default orderRoutes;