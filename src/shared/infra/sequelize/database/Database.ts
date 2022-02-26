import { Sequelize } from '@sequelize/core';
import { IDatabase } from './IDatabase';
import config from './config.json'

class Database implements IDatabase {
    connection!: Sequelize;

    async connect(): Promise<void> {
        this.connection = new Sequelize({
            host: config.host,
            dialect: 'postgres',
            username: config.username,
            password: config.password,
            database: config.database
        })
        
    }
    async disconnect(): Promise<void> {
        await this.connection.close()
    }

}
export const database = new Database()