import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.user
      .findFirst({
        where: {id: 1},
        include: {posts: true},
      })
      .then(data=>console.log(data))
      .catch(e=>{
        console.error(e);
        // eslint-disable-next-line no-undef
        process.exit(1);
      })
      .finally(()=>{
        prisma.$disconnect();
      });