import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function migrateApiId() {
  const sessions = await prisma.session.findMany({
    where: { apiId: { not: null } }
  });

  for (const session of sessions) {
    try {
      const apiIdInt = parseInt(session.apiId || '');
      if (!isNaN(apiIdInt)) {
        await prisma.session.update({
          where: { id: session.id },
          data: { apiIdInt }
        });
      }
    } catch (error) {
      console.error(`Error migrating session ${session.id}:`, error);
    }
  }
}

migrateApiId()
  .catch(console.error)
  .finally(() => prisma.$disconnect());