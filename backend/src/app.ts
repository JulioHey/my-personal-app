import "reflect-metadata";
import express from 'express';
import cors from 'cors';

export class App {
    public app: express.Application;
    public port: number;

    constructor (router, port?: number) {
        this.app = express();
        this.port = port;
        
        this.initializeMiddlewares();
        this.initializeRoutes(router);
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    private initializeRoutes(router) {
        this.app.use(router);
    }

    public listen() {
        return this.app.listen(this.port, () => {
          console.log(`App listening on the port ${this.port}`);
        });
      }
}
