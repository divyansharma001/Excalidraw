import { NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "./config";

export function middleware(req:Request, res:Response, next:NextFunction) {
const token = req.headers['authorization'] ?? '';

const decoded = jwt.verify(token, JWT_SECRET);

if(decoded){
    //todo: fix this by adding a global type declaration
   req.userId = decoded.userId;
   next(0);
}else{
    res.status(401).json({
        message: 'Unauthorized'
    })
}


}