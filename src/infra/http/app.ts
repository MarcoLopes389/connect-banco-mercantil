import express from 'express';
import cors from 'cors';
import expressPrometheusMiddleware from 'express-prometheus-middleware';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
    expressPrometheusMiddleware({
        collectDefaultMetrics: true,
        metricsApp: app,
        metricsPath: '/metrics',
    })
);

export default app;
