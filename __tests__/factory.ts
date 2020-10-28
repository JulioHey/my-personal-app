import 'reflect-metadata';

process.env.NODE_ENV = 'test';

import { config} from 'dotenv';
config();

import { createConnection, ConnectionOptions, Connection, Server } from 'typeorm';
import {createServer, Server as HttpServer} from 'http';

import express from 'express';
import supertest from 'supertest';

import App from '../src/app';
import appRouter from '../src/routes';

export class TestFactory {
    public _app: express.Application;
    public _connection: Connection;
    public _server: HttpServer;

    public options: ConnectionOptions = {
        type: "sqlite",
        database: "./__tests__/database.sqlite",
        logging: false,
        synchronize: true,
        entities: [
            "./src/models/**/*.model.ts"
         ],
         migrations: [
            "./src/migrations/**/*.migration.ts"
         ],
         cli: {
            entitiesDir: "./src/models/**/*.model.ts",
            migrationsDir: "./src/migrations/**/*.migration.ts"
         }
    };

    public get app(): supertest.SuperTest<supertest.Test> {
        return supertest(this._app);
    }

    public get connection(): Connection {
        return this._connection;
    }

    public get server(): HttpServer {
        return this._server;
    }

    public async init(port:number): Promise<void> {
        this._connection = await createConnection(this.options);
        this._app = new App(3000, appRouter).app;
        this._server = createServer(this._app).listen(port);
    };

    public async close(): Promise<void> {
        this._server.close();
        this._connection.close();        
    };
}
