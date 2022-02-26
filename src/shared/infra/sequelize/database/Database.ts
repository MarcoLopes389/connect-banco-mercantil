import { Sequelize } from '@sequelize/core';
import { IDatabase } from './IDatabase';

class Database implements IDatabase {
    connection!: Sequelize;

    async connect(): Promise<void> {
        this.connection = new Sequelize({
            host: 'localhost',
            dialect: 'postgres',
            username: 'nano',
            password: 'nano',
            database: 'consigmais'
        })
        
    }
    async disconnect(): Promise<void> {
        await this.connection.close()
    }

}

export const database = new Database()