//this is an express server
import express from 'express';

import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World!' });
});

app.post('/signup', (req,res)=>{
    
})

app.post('/login', (req,res)=>{

})

app.post('/room', (req,res)=>{
    
})

app.listen(3001);