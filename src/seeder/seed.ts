import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // you can create your separate seeder files and call them here
  console.log("Start seeding ...");
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
