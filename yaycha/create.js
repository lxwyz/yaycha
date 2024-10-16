// eslint-disable-next-line no-undef
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

prisma.user
	.create({
		data: {
			name: "Bob",
			bio: "profile bio",
			posts: {
				create: [{ content: "First Post" }, { content: "Second Post" }],
			},
		},
	})
	.then(() => {
		console.log("Inserted User Bob with Posts");
	})
	.catch(e => {
		console.error(e);
		// eslint-disable-next-line no-undef
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});