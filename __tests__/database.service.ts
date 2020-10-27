import { Connection, Repository } from 'typeorm';

export class DatabaseService {
    public connection: Connection;

    constructor(connection) {
        this.connection = connection;
    }

    async getRepository<T>(entity): Promise<Repository<T>> {
        return this.connection.getRepository(entity);
    }
}