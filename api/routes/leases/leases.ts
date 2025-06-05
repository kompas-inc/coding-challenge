import { Router } from 'express';
import type { Request, Response } from 'express';
import { database } from '../../prisma';

export const leasesRouter: Router = Router();

const getLeases = async (req: Request, res: Response) => {
  const leases = await database.leases.findMany();

  return res.json({
    leases,
  });
};

leasesRouter.get('/', getLeases);
