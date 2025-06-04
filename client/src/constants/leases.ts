export type Lease = {
  id: number;
  startDate: Date;
  endDate: Date;
  tenant: {
    firstName: string;
    lastName: string;
  };
};

export const leases: Lease[] = [
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
];
