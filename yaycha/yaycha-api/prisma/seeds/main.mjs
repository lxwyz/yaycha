import { PrismaClient } from "@prisma/client";
import { UserSeeder } from "./UserSeeder.mjs";
import { PostSeeder } from "./PostSeeder.mjs";
import { CommentSeeder } from "./CommentSeeder.mjs";

const prisma = new PrismaClient();

async function main() {
    try {
        await UserSeeder();
        await PostSeeder();
        await CommentSeeder();
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
