import express from 'express';
import { systemConfig } from './config/index';
import pingRouter from './router/ping.router';
import { genericErrorHandler } from './middlewares/error.middleware';
import { addCorrelationIdMiddleware } from './middlewares/correlation.middleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(addCorrelationIdMiddleware);
app.use(pingRouter);

app.use(genericErrorHandler);

app.listen(systemConfig.port, () => {
  console.log(`Server is running on http://localhost:${systemConfig.port}`);
  console.log(`Press Ctrl+C to stop the server`);
});