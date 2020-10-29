import 'reflect-metadata';

import {createConnection} from 'typeorm';

import appRouter from './routes';
import {App} from './app';

require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : "env"
});

const app = new App(appRouter, 3333);

createConnection().then(connection => {
    app.listen();
});

export default app;