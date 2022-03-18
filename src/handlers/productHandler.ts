import express, {  Request, Response } from 'express'
import {  productStore } from '../models/product'
import {verifyAuthToken} from '../middleware/auth'



const store=new productStore();


const index=async(_req: Request, res: Response)=>{
    try {
        const products=await store.index();
        res.status(200).json(products);
    } catch (error) {
        res.json(error)
    }
    
}


const show=async(req: Request, res: Response)=>{
    try {
        const product=await store.show(parseInt(req.params.id));
        res.status(200).json(product);
    } catch (error) {
     res.json(error)   
    }
  
}

const create=async(req: Request, res: Response)=>{
    try {
        const {name,price,category}=req.body
        const product=await store.create({
            name:name,
            price:price,
            category:category})
        res.status(201).json(product)
    }catch (error) {
        res.json(error)
    }
}




 
const productRouter = (app: express.Application) => {
    app.get('/products', index)
    app.get('/products/:id', show)
    app.post('/products',verifyAuthToken, create)
}

export default productRouter;