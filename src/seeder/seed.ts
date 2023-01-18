import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // seeding from this file
  const userData = {
    fName: "Jean",
    lName: "Dian",
  };

  prisma.user.create({
    data: userData,
  });
  // you can create your separate seeder files and call them here
  console.log("Start seeding ...");
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
