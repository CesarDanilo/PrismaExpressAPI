import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: "cesar@gmail.com",
            name: "César",
            posts: {
                create: { title: 'Hello World' },
            },
            profile: {
                create: { bio: 'I like turtles' },
            },
        }
    })

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true
        }
    });

    console.log(allUsers);
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.log()
});