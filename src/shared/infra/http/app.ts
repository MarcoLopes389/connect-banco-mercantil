import 'express-async-errors';
import 'reflect-metadata'
import '../../containers'
import { database } from '../sequelize';
import express, { Express } from 'express';
import cors from 'cors';
import simulationRouter from './routes/simulation.route'
import expressPrometheusMiddleware from 'express-prometheus-middleware';
import { container } from 'tsyringe';
import { UpdateToken } from '../../../jobs/updateToken';
import { config } from 'dotenv';

config()
const updateToken = container.resolve(UpdateToken)

class App {
    server: Express;

    constructor() {
        this.server = express();
    }

    setup() {
        this.middlewares();
        this.connections();
        this.routes();
        updateToken.start()
        process.on('SIGTERM', this.finish);
        process.on('SIGINT', this.finish);
    }

    middlewares() {
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

    routes() {
        this.server.use('/', simulationRouter)
    }

    async connections() {
        await database.connect();
    }

    finish() {
        database.disconnect();
        process.exit();
    }
}

export const app = new App();
