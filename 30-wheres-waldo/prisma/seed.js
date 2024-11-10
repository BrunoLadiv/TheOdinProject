const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const map1 = await prisma.map.create({
    data: {
      name: "Forest Adventure",
      imgUrl: "/public/images/game1.jpg",
      slug: "forest-adventure",
      scores: {
        create: [
          { value: 1200, userName: "Alice" },
          { value: 950, userName: "Bob" },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
