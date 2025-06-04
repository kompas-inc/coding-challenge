import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import type { Express, Request, Response } from 'express';

import { Routers } from './routes';

export const app: Express = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '200kb' }));
app.use(cookieParser());

// Root endpoint for easy testing
app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'API is running' });
});

app.use('/leases', Routers.leases);
