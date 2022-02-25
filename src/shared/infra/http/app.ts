import { database } from '../sequelize';
import express, { Express } from 'express';
import cors from 'cors';
import expressPrometheusMiddleware from 'express-prometheus-middleware';

class App {
    server: Express

    constructor () {
        this.server = express()
    }

    setup() {
        this.middlewares()
        this.routes()
        this.connections()
        process.on('SIGTERM', this.finish)
        process.on('SIGINT', this.finish)
    }

    middlewares () {
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(
            expressPrometheusMiddleware({
                collectDefaultMetrics: true,
                metricsApp: this.server,
                metricsPath: '/metrics',
            })
        );
    }

    routes () {
    }

    async connections () {
        await database.connect()
    }

    finish () {
        database.disconnect()
        process.exit()
    }
}

export const app = new App()
