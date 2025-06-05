import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import type { Express, Request, Response, NextFunction } from 'express';

import { Routers } from './routes';

export const app: Express = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '200kb' }));
app.use(cookieParser());

app.get('/', (_req: Request, res: Response) => res.json({ status: 'Ok' }));
app.use('/leases', Routers.leases);

// Error handler middleware must have 4 parameters
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ error: err?.message || 'Internal Server Error' });
});
