import { user } from "../models/user";
import express, { Response ,NextFunction} from "express";
import jwt, { JwtPayload ,Secret} from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

// interface tokenInterface{
//     user:user,
//     iat:number
// }

export interface IUserRequest extends express.Request {
    user?:user
}

export const verifyAuthToken = (req: IUserRequest, res: Response, next:NextFunction) => {
    try {
        const authorizationHeader:unknown = req.headers.authorization
        const token = (authorizationHeader as string).split(' ')[1]
        const decoded = jwt.verify(token, (process.env.TOKEN_SECRET as Secret))
        req.user=(decoded as JwtPayload).user
        next()
    } catch (error) {
        res.status(401).json(error)
    }
}


