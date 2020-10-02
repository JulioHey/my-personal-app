import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';

const app = express();

createConnection().then(connection => {
    app.use(express.json());

    app.use(cors());

    app.listen(3333);
})
