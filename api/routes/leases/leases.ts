import { Router } from 'express';
import type { Request, Response } from 'express';

export const leasesRouter: Router = Router();

const getLeases = async (req: Request, res: Response) => {
  return res.json({
    leases: [
      {
        id: 1,
        startDate: new Date(),
        endDate: new Date(),
        tenant: {
          firstName: 'John',
          lastName: 'Doe',
        },
      },
      {
        id: 2,
        startDate: new Date(),
        endDate: new Date(),
        tenant: {
          firstName: 'Jane',
          lastName: 'Doe',
        },
      },
      {
        id: 3,
        startDate: new Date(),
        endDate: new Date(),
        tenant: {
          firstName: 'John',
          lastName: 'Smith',
        },
      },
      {
        id: 4,
        startDate: new Date(),
        endDate: new Date(),
        tenant: {
          firstName: 'Jane',
          lastName: 'Smith',
        },
      },
    ],
  });
};

leasesRouter.get('/', getLeases);
