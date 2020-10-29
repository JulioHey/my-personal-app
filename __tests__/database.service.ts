import { Connection, ConnectionOptions, createConnection, Repository } from 'typeorm';

export const options: ConnectionOptions = {
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

class DatabaseService {
    public connection: Connection;

    constructor(connection) {
        this.connection = connection;
    }

    async destroy() {
      const entities = await this.getEntities();
      await this.cleanAll(entities);
    }

    async getRepository<T>(entity): Promise<Repository<T>> {
        return this.connection.getRepository(entity);
    }

    async getEntities() {
        const entities = [];
        (await (await this.connection).entityMetadatas).forEach(
          x => entities.push({name: x.name, tableName: x.tableName})
        );
        return entities;
    };

    async cleanAll(entities) {
        try {
          for (const entity of entities) {
            const repository = await this.getRepository(entity.name);
            await repository.query(`DELETE FROM ${entity.tableName};`);
          }
        } catch (error) {
          throw new Error(`ERROR: Cleaning test db: ${error}`);
        }
      }
}

export default DatabaseService;