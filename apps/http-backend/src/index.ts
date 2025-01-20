//this is an express server
import express from 'express';

import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World!' });
});

app.listen(3000);