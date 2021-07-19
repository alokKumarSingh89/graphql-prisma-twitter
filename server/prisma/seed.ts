import  { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const userData = [
    {
        name: 'Alice',
        email: 'alice@prisma.io',
        password: '$2a$10$TLtC603wy85MM./ot/pvEec0w2au6sjPaOmLpLQFbxPdpJH9fDwwS', // myPassword42
        posts: {
            create: [
                {
                    title: 'Join the Prisma Slack',
                    content: 'https://slack.prisma.io',
                    published: true,
                },
            ],
        },
    },
    {
        name: 'Nilu',
        email: 'nilu@prisma.io',
        password: '$2a$10$k2rXCFgdmO84Vhkyb6trJ.oH6MYLf141uTPf81w04BImKVqDbBivi', // random42
        posts: {
            create: [
                {
                    title: 'Follow Prisma on Twitter',
                    content: 'https://www.twitter.com/prisma',
                    published: true,
                    viewCount: 42,
                },
            ],
        },
    },
    {
        name: 'Mahmoud',
        email: 'mahmoud@prisma.io',
        password: '$2a$10$lTlNdIBQvCho0BoQg21KWu/VVKwlYsGwAa5r7ctOV41EKXRQ31ING', // iLikeTurtles42
        posts: {
            create: [
                {
                    title: 'Ask a question about Prisma on GitHub',
                    content: 'https://www.github.com/prisma/prisma/discussions',
                    published: true,
                    viewCount: 128,
                },
                {
                    title: 'Prisma on YouTube',
                    content: 'https://pris.ly/youtube',
                },
            ],
        },
    },
];

async function main() {
    console.log("Start Seeding");
    for (const u of userData) {
        const user = await prisma.user.create({ data: u });
        console.log(`User Created with ${user.id}`);
    }
    console.log('Finish');
}

main().catch(e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect()
})