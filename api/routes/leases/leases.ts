import { Router } from 'express';
import type { Request, Response } from 'express';
import { database } from '../../prisma';

export const leasesRouter: Router = Router();

export const getLeases = async (_req: Request, res: Response) => {
  const leases = await database.leases.findMany();

  return res.json({
    leases,
  });
};

leasesRouter.get('/', getLeases);
