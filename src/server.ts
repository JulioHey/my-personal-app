import 'reflect-metadata';

import {createConnection} from 'typeorm';

import appRouter from './routes';
import App from './app';

require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : "env"
});

const app = new App(3333, appRouter);

createConnection().then(connection => {
    app.listen();
});

export default app;