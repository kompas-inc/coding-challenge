import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.leases.deleteMany({});

  console.log('Seeding database...');

  // Create sample leases
  const leases = await Promise.all([
    prisma.leases.create({
      data: {
        start_date: new Date('2025-01-01'),
        end_date: new Date('2025-12-31'),
        tenant_name: 'John Doe',
      },
    }),
    prisma.leases.create({
      data: {
        start_date: new Date('2025-02-15'),
        end_date: new Date('2026-02-14'),
        tenant_name: 'Jane Smith',
      },
    }),
    prisma.leases.create({
      data: {
        start_date: new Date('2025-03-10'),
        end_date: new Date('2026-03-09'),
        tenant_name: 'Robert Johnson',
      },
    }),
    prisma.leases.create({
      data: {
        start_date: new Date('2025-04-01'),
        end_date: new Date('2026-03-31'),
        tenant_name: 'Emily Williams',
      },
    }),
  ]);

  console.log(`Created ${leases.length} leases`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
