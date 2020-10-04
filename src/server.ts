import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import "reflect-metadata";

import {adminRoutes} from './routes/admin.routes';

const app = express();

createConnection().then(connection => {
    app.use(express.json());

    app.use(cors());

    app.use(adminRoutes);
    console.log(connection.isConnected);
    app.listen(3333);
})

