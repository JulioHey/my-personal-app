import express from 'express';
import cors from 'cors'
import 'reflect-metadata';

import {createConnection} from 'typeorm';

import appRouter from './routes';

const app = express();

createConnection().then(connection => {
    app.use(express.json());
    app.use(cors());

    app.use(appRouter)

    app.listen(3333);
    console.log(`Server is running in port 3333, and is ${connection.isConnected}`)
})