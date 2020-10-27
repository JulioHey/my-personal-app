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
import { DatabaseService } from './database.service';

export class TestFactory {
    public databaseService: DatabaseService;
    private _app: express.Application;
    private _connection: Connection;
    private _server: HttpServer;

    private options: ConnectionOptions = {
        type: "sqlite",
        database: "./__tests__/database.sqlite",
        logging: false,
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

    public async init(): Promise<void> {
        this._connection = await createConnection(this.options);
        this._app = new App(3000, appRouter).app;
        this._server = createServer(this._app).listen(3000);

        this.databaseService = new DatabaseService(this._connection);
    };

    public async close(): Promise<void> {
        const entities = await this.getEntities();
        await this.cleanAll(entities);

        this._server.close();
        this._connection.close();
    };

    async getEntities() {
        const entities = [];
        (await (await this.databaseService.connection).entityMetadatas).forEach(
          x => entities.push({name: x.name, tableName: x.tableName})
        );
        return entities;
    };

    async cleanAll(entities) {
        try {
          for (const entity of entities) {
            const repository = await this.databaseService.getRepository(entity.name);
            await repository.query(`DELETE FROM ${entity.tableName};`);
          }
        } catch (error) {
          throw new Error(`ERROR: Cleaning test db: ${error}`);
        }
      }
    
}
