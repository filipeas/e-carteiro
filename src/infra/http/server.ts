
import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';

import express from 'express';

import '../container';

import { routes } from './routes';

import { handleException } from './middlewares/exception.middleware';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', async (request, response) => {
    return response.json({
        message: 'Server make with artisan',
        version: '0.3.0',
        author: 'Filipe A.S',
    });
});

// app.use(routes);

app.use(handleException);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server on ${process.env.APP_URL}`);
});
