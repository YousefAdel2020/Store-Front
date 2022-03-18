import { userInfo, user } from "../models/user";
import express, { Request, Response } from "express";
import {verifyAuthToken} from '../middleware/auth'
import jwt, { Secret} from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()



const info = new userInfo();




const index = async (_req: Request, res: Response) => {
  try { 
    const users = await info.index()
    res.status(200).json(users)
    
  } catch (error) {
    res.json(error)
  }
  
}

const show = async (_req: Request, res: Response) => {
  try {
    const user = await info.show(parseInt(_req.params.id as string))
    res.status(200).json(user)
  } catch (error) {
    res.json(error)
  }
  
}


const create = async (req: Request, res: Response) => {
  try {
    const user: user = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        username: req.body.username,
        password: req.body.password
    }
    const newUser = await info.create(user);
    const token= jwt.sign({user:newUser},(process.env.TOKEN_SECRET as Secret))
    res.status(201).json(token);
  } catch (error) {
    res.status(401).
    json(error);
  }
};




const userRouter = (app: express.Application) => {
    app.get('/users',verifyAuthToken, index)
    app.get('/users/:id',verifyAuthToken, show)
    app.post('/users', create)
};

export default userRouter;
