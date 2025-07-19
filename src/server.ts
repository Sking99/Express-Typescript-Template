import express from 'express';
import { systemConfig } from './config/index.js';
import pingRouter from './router/ping.router.js';
// import { pingHandler } from './controllers/ping.controller.js';

const app = express();

app.use(pingRouter);

app.listen(systemConfig.port, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});