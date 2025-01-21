//this is an express server
import express from 'express';

import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World!' });
});

app.post('/signup', (req,res)=>{
    
})

app.post('/signin', (req,res)=>{
const userId = 1;

const token = jwt.sign({
    userId
}, JWT_SECRET)

res.json({token})

})

app.post('/room', (req,res)=>{
    
})

app.listen(3001);