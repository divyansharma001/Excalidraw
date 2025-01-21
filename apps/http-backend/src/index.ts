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
    //db call
    res.json({
        userId:123
    })
})

app.post('/signin', (req,res)=>{
const userId = 1;

const token = jwt.sign({
    userId
}, JWT_SECRET)

res.json({token})

})

app.post('/room', (req,res)=>{
    //db call

    res.json({
        roomId : 123
    })
})

app.listen(3001);